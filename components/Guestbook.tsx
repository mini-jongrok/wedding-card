'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Trash2, PenLine, X, Loader2 } from 'lucide-react';

interface Comment {
  id: number;
  writer: string;
  content: string;
  created_at: string;
}

export default function Guestbook() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  // Action State (Delete/Edit)
  const [actionId, setActionId] = useState<number | null>(null);
  const [actionType, setActionType] = useState<'DELETE' | 'EDIT' | null>(null);
  const [actionPassword, setActionPassword] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments');
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (error) {
      console.error('Failed to fetch comments', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!writer || !password || !content) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ writer, password, content }),
      });

      if (res.ok) {
        setWriter('');
        setPassword('');
        setContent('');
        fetchComments();
      } else {
        alert('방명록 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error submitting comment', error);
      alert('오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!actionId || !actionPassword) return;

    try {
      const res = await fetch(`/api/comments/${actionId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: actionPassword }),
      });

      if (res.ok) {
        resetAction();
        fetchComments();
      } else {
        const data = await res.json();
        alert(data.error === 'incorrect password' ? '비밀번호가 일치하지 않습니다.' : '삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting comment', error);
    }
  };

  const handleEdit = async () => {
    if (!actionId || !actionPassword || !editContent) return;

    try {
      const res = await fetch(`/api/comments/${actionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: actionPassword, content: editContent }),
      });

      if (res.ok) {
        resetAction();
        fetchComments();
      } else {
        const data = await res.json();
        alert(data.error === 'incorrect password' ? '비밀번호가 일치하지 않습니다.' : '수정에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error editing comment', error);
    }
  };

  const openDeleteModal = (id: number) => {
    setActionId(id);
    setActionType('DELETE');
    setActionPassword('');
  };

  const openEditModal = (comment: Comment) => {
    setActionId(comment.id);
    setActionType('EDIT');
    setActionPassword('');
    setEditContent(comment.content);
  };

  const resetAction = () => {
    setActionId(null);
    setActionType(null);
    setActionPassword('');
    setEditContent('');
  };

  return (
    <section className="py-16 px-6 bg-[#f9f9f9] text-center font-sans">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">GUESTBOOK</h2>
        <p className="text-gray-600 mb-8 text-sm">축하의 마음을 남겨주세요</p>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm mb-10 border border-gray-100">
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="이름"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
              className="w-1/2 p-3 bg-gray-50 rounded-lg text-sm border border-gray-100 focus:outline-none focus:border-gray-300"
              required
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-1/2 p-3 bg-gray-50 rounded-lg text-sm border border-gray-100 focus:outline-none focus:border-gray-300"
              required
            />
          </div>
          <textarea
            placeholder="축하 메시지를 남겨주세요 (200자 이내)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={200}
            className="w-full p-3 bg-gray-50 rounded-lg text-sm h-24 mb-3 border border-gray-100 focus:outline-none focus:border-gray-300 resize-none"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-800 text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50 flex justify-center items-center"
          >
            {isSubmitting ? <Loader2 className="animate-spin w-4 h-4" /> : '등록하기'}
          </button>
        </form>

        {/* Comments List */}
        {isLoading ? (
            <div className="flex justify-center py-10">
                <Loader2 className="animate-spin text-gray-400" />
            </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white p-5 rounded-xl shadow-sm text-left border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-gray-800 text-sm">{comment.writer}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-gray-600 text-sm whitespace-pre-wrap leading-relaxed">{comment.content}</p>
                <div className="flex justify-end gap-3 mt-3">
                    <button onClick={() => openEditModal(comment)} className="text-gray-400 hover:text-gray-600">
                        <PenLine size={14} />
                    </button>
                    <button onClick={() => openDeleteModal(comment.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 size={14} />
                    </button>
                </div>
              </div>
            ))}
            {comments.length === 0 && (
                <p className="text-gray-400 text-sm py-10">아직 등록된 메시지가 없습니다.</p>
            )}
          </div>
        )}
      </div>

      {/* Action Modal (Password Confirm) */}
      {actionType && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-xs shadow-lg relative">
            <button onClick={resetAction} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <h3 className="text-lg font-bold mb-4 text-gray-800">
                {actionType === 'DELETE' ? '삭제하기' : '수정하기'}
            </h3>
            
            {actionType === 'EDIT' && (
                <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    maxLength={200}
                    className="w-full p-3 bg-gray-50 rounded-lg text-sm h-24 mb-3 border border-gray-100 focus:outline-none focus:border-gray-300 resize-none"
                    placeholder="수정할 내용을 입력하세요"
                />
            )}

            <p className="text-sm text-gray-600 mb-3">비밀번호를 입력해주세요.</p>
            <input
              type="password"
              placeholder="비밀번호"
              value={actionPassword}
              onChange={(e) => setActionPassword(e.target.value)}
              className="w-full p-3 bg-gray-50 rounded-lg text-sm border border-gray-100 focus:outline-none focus:border-gray-300 mb-4"
            />
            <div className="flex gap-2">
                <button 
                    onClick={resetAction}
                    className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200"
                >
                    취소
                </button>
                <button 
                    onClick={actionType === 'DELETE' ? handleDelete : handleEdit}
                    className="flex-1 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700"
                >
                    확인
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

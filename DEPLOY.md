# Vercel 배포 가이드

이 가이드는 만든 청첩장 웹사이트를 Vercel을 통해 무료로 배포하는 방법을 설명합니다.

## 1. Git 저장소 준비

먼저 코드를 GitHub에 올려야 합니다.

1.  **GitHub 저장소 생성**:
    - [GitHub](https://github.com)에 로그인하고 'New Repository'를 클릭합니다.
    - 저장소 이름(예: `my-wedding-card`)을 입력하고 'Create repository'를 클릭합니다.

2.  **코드 업로드**:
    터미널에서 다음 명령어를 순서대로 입력하세요.
    ```bash
    # 현재 폴더에서 git 초기화 (이미 되어있다면 생략 가능)
    git init

    # 모든 파일 추가
    git add .

    # 커밋 메시지 작성
    git commit -m "Initial commit"

    # GitHub 저장소 연결 (YOUR_USERNAME과 REPO_NAME을 본인 것으로 변경)
    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

    # 코드 푸시
    git push -u origin main
    ```

## 2. Vercel 배포

1.  **Vercel 가입/로그인**:
    - [Vercel](https://vercel.com)에 접속하여 GitHub 계정으로 로그인합니다.

2.  **새 프로젝트 추가**:
    - 대시보드에서 'Add New...' -> 'Project'를 클릭합니다.
    - 방금 올린 `my-wedding-card` 저장소 옆의 'Import' 버튼을 클릭합니다.

3.  **배포 설정**:
    - **Framework Preset**: `Next.js`가 자동으로 선택되어 있을 것입니다.
    - **Root Directory**: `./` (기본값 유지)
    - **Build Command**: `next build` (기본값 유지)
    - **Environment Variables**: 특별히 설정할 것이 없다면 비워둡니다.
    - 'Deploy' 버튼을 클릭합니다.

4.  **완료**:
    - 잠시 기다리면 배포가 완료되고 축하 화면이 나옵니다.
    - 생성된 도메인(예: `my-wedding-card.vercel.app`)을 클릭하여 사이트를 확인합니다.

## 3. 주의사항 및 팁

-   **이미지 도메인**:
    -   만약 외부 이미지(예: `picsum.photos` 외의 다른 사이트)를 사용한다면, `next.config.ts` 파일의 `images.remotePatterns`에 해당 도메인을 추가해야 합니다. 그렇지 않으면 배포 후 이미지가 보이지 않고 에러가 날 수 있습니다.
    
-   **커스텀 도메인**:
    -   Vercel 설정의 'Domains' 메뉴에서 개인 도메인(예: `leosarah.com`)을 연결할 수 있습니다.

-   **업데이트**:
    -   코드를 수정하고 GitHub에 `push`하면 Vercel이 자동으로 감지하여 재배포합니다.

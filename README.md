<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Pureum Software (pureum.dev)

Official website and product showcase for Pureum Software.

- **Production URL**: [https://pureum.dev](https://pureum.dev)
- **GitHub Repository**: [`offgridcabin2021-droid/pureum-software`](https://github.com/offgridcabin2021-droid/pureum-software)
- **Hosting Platform**: Cloudflare Pages

---

## 🚀 Cloudflare Pages 자동 배포 안내

이 프로젝트는 **GitHub (`offgridcabin2021-droid/pureum-software`)의 `main` 브랜치와 Cloudflare Pages가 연동**되어 있습니다.  
따라서 코드를 빌드하고 GitHub에 푸시하면 별도의 수동 작업 없이 **Cloudflare 서버가 자동으로 감지하여 `pureum.dev`에 최신 상태로 자동 배포**됩니다.

### 📋 배포 절차 (3단계)

#### 1. 정적 파일 빌드
Next.js 정적 내보내기(`output: 'export'`)를 실행하여 최신 웹 페이지 결과물을 `out/` 폴더에 생성합니다:
```bash
npm run build
```

#### 2. Git 변경 사항 추가 및 커밋
수정된 소스 코드와 새로 빌드된 `out/` 폴더 결과물을 커밋합니다:
```bash
git add .
git commit -m "feat: 업데이트 내용 요약"
```

#### 3. GitHub `main` 브랜치로 푸시
```bash
git push origin main
```

#### 4. 배포 완료 확인
- 푸시가 완료되면 **약 30초~1분 이내**에 Cloudflare Pages가 빌드를 배포합니다.
- [https://pureum.dev](https://pureum.dev)에 접속하여 업데이트가 정상 반영되었는지 확인합니다.

---

## 🛠 배포 설정 정보

| 항목 | 설정값 | 비고 |
| :--- | :--- | :--- |
| **GitHub Repo** | `offgridcabin2021-droid/pureum-software` | 연결된 원격 저장소 (`origin`) |
| **Deploy Branch** | `main` | 푸시 시 자동 배포 트리거 브랜치 |
| **Build Output Dir** | `out` | `wrangler.json` 및 정적 HTML 산출물 경로 |
| **Production Domain**| `pureum.dev` | Cloudflare Custom Domain |

---

## 💻 로컬 개발 환경 실행

```bash
# 1. 의존성 설치
npm install

# 2. 로컬 개발 서버 실행 (http://localhost:3000)
npm run dev
```


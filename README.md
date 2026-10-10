<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Pureum Software (pureum.dev)

Official website and product showcase for Pureum Software.

- **Production URL**: [https://pureum.dev](https://pureum.dev)
- **GitHub Repository**: [`offgridcabin2021-droid/pureum-software`](https://github.com/offgridcabin2021-droid/pureum-software)
- **Hosting Platform**: Cloudflare Pages

---

## 🚀 Cloudflare Pages 배포 안내

이 프로젝트는 Cloudflare Pages 프로젝트 `pureum-software`에 **Direct Upload(Wrangler CLI)** 방식으로 배포됩니다.  
Next.js 정적 내보내기 결과물(`out/`)을 Cloudflare Pages로 직접 배포하여 **`pureum.dev`에 즉시 실시간 배포**됩니다.

### 📋 원클릭 배포 (권장)

다음 명령어 하나로 **Next.js 정적 빌드 + Cloudflare Pages 실시간 배포**가 자동으로 완료됩니다:

```bash
npm run deploy
```

> **참고**: `npm run deploy`는 내부적으로 `next build && wrangler pages deploy out --project-name pureum-software`를 실행하며, 실행 즉시 수 초 내에 `https://pureum.dev`에 반영됩니다.

---

### 📋 GitHub 버전 관리 및 백업

소스 코드와 결과물을 GitHub에 커밋 및 푸시하여 버전을 관리합니다:

```bash
git add .
git commit -m "feat: 업데이트 내용 요약"
git push origin main
```

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


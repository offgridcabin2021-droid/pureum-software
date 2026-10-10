# Pureum Software - Agent Guidelines & Deployment Workflow

## 🚀 Cloudflare Pages Deployment Rule

The `pureum-software` project on Cloudflare Pages (`pureum.dev`) uses **Direct Upload via Wrangler CLI** (`Git Provider: No`).  
Pushing to GitHub alone **DOES NOT** trigger a Cloudflare deployment.

---

### 1. 배포 절차 (Deployment Process)
웹사이트 배포 요청 시 반드시 아래 순서로 진행합니다:

1. **정적 빌드 및 Cloudflare Pages 실서버 배포**:
   ```bash
   PATH="/opt/homebrew/bin:$PATH" npm run deploy
   ```
   *(내부적으로 `next build && wrangler pages deploy out --project-name pureum-software`가 실행되어 `pureum.dev`에 즉시 실시간 반영됩니다.)*

2. **GitHub 버전 관리 동기화**:
   ```bash
   git add .
   git commit -m "feat/fix: 업데이트 내용 요약"
   git push origin main
   ```

---

### 2. 주요 설정 파일 및 도메인
- **Cloudflare 설정**: `wrangler.json` (`pages_build_output_dir: "out"`)
- **빌드 출력 경로**: `out/` (Next.js `output: 'export'`)
- **실서버 도메인**: 
  - `https://pureum.dev`
  - `https://pureum-software.pages.dev`
- **치과 재고 솔루션 경로**: `https://pureum.dev/inventory/`

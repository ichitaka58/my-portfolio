# ichitaka58's Portfolio

個人ポートフォリオサイト。制作実績・スキル・Qiita記事をまとめたシングルページアプリケーションです。

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| UIコンポーネント | shadcn/ui, Radix UI |
| CMS | microCMS（制作実績） |
| 外部API | Qiita API（技術記事） |

## セクション構成

- **Hero** — プロフィールとGitHub Contributionsグラフ
- **About** — 経歴・自己紹介
- **Skills** — 使用技術一覧
- **Works** — 制作実績（microCMSから取得）
- **Articles** — Qiita投稿記事一覧
- **Contact** — 連絡先

## ローカル環境のセットアップ

### 前提条件

- Node.js 18 以上
- microCMSのサービスドメインとAPIキー
- QiitaのアクセストークンAPIキー

### 環境変数

`.env.local` を作成し、以下を設定します。

```env
MICROCMS_SERVICE_DOMAIN=your_service_domain
MICROCMS_API_KEY=your_api_key
QIITA_TOKEN=your_qiita_token
```

### インストールと起動

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## スクリプト

```bash
npm run dev    # 開発サーバー起動
npm run build  # プロダクションビルド
npm run start  # プロダクションサーバー起動
npm run lint   # ESLintチェック
```

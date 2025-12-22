# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

React + TypeScript + Vite で構築されたポートフォリオサイトです。状態管理に Redux Toolkit、スタイリングに Vanilla Extract、アニメーションに Motion を使用しています。

## 開発コマンド

このプロジェクトは **bun** をパッケージマネージャーとして使用しています。

```bash
# 開発サーバーの起動
bun run dev

# プロダクションビルド
bun run build

# Lint の実行
bun run lint

# プレビューサーバーの起動
bun run preview
```

## アーキテクチャ

### ディレクトリ構成の原則

このプロジェクトは**高凝集・コロケーション**の原則に基づいて設計されています:

- **コロケーション**: コンポーネント、スタイル、フック、サブコンポーネントは同階層に配置
- **凝集度**: 各ディレクトリは明確な責務を持ち、関連するコードをまとめる

### src/ ディレクトリ構成

```
src/
  ├── assets/          # 画像、フォントなどの静的アセット
  ├── data/            # JSON やその他のデータファイル
  ├── designs/         # ドメイン知識を持たない純粋な UI コンポーネント
  │   └── Button/
  │       ├── index.tsx
  │       └── index.css.ts
  ├── widgets/         # 特定のドメイン知識を持つ UI コンポーネント
  │   └── Header/
  │       ├── index.tsx
  │       ├── index.css.ts
  │       ├── useDrawerMenu.ts
  │       └── MenuButton/
  │           ├── index.tsx
  │           └── index.css.ts
  └── states/          # Redux による状態管理
      ├── index.ts     # ストアの設定とユーティリティ関数
      ├── slice.ts     # ビジネスロジックの実装
      └── state.ts     # 初期状態とグローバル状態の型定義
```

### コンポーネント配置ルール

1. **designs/**: 再利用可能な汎用 UI コンポーネント

   - ドメイン知識を持たない
   - コンポーネントごとに必ず storybook が存在する
   - 例: Button, Input, Card

2. **widgets/**: ドメイン固有の UI コンポーネント

   - アプリケーション固有の知識を持つ
   - 例: Header, Footer, ProfileSection
   - サブコンポーネントは親コンポーネントと同階層に配置

3. コンポーネントが大きくなる場合は、サブコンポーネントを同じディレクトリ内に作成

### 状態管理

Redux Toolkit を使用した状態管理の構成:

- `states/index.ts`: カスタムフックとストア設定を提供
  - `useSelector`: 型安全な状態の取得
  - `useActions`: アクションのディスパッチ
- `states/slice.ts`: リデューサーとアクションの実装
- `states/state.ts`: 状態の型定義と初期値

### スタイリング

Vanilla Extract を使用した型安全な CSS-in-JS:

- スタイルファイルは `*.css.ts` の命名規則
- コンポーネントと同階層に配置

### アニメーション

Motion ライブラリを使用してアニメーションを実装

### アイコン

Font Awesome を使用:

- `@fortawesome/react-fontawesome`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/free-regular-svg-icons`
- `@fortawesome/free-brands-svg-icons`

## TypeScript 設定

- Strict モードが有効
- 未使用のローカル変数・パラメータは禁止
- プロジェクトは `tsconfig.app.json` と `tsconfig.node.json` に分割

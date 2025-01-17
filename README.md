# ptInfoApp

患者情報を集約して、検索／表示する webアプリです

## 使用技術一覧
<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<!-- <img src="https://img.shields.io/badge/{バッジ左の文字}-{バッジ右の文字}-{色}.svg?logo={ロゴ名}&style=for-the-badge"> -->
<!-- ロゴは simpleIcon https://simpleicons.org/ から選べる -->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <!--<img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge"> -->
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <!-- <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> 
  -->
  <!-- バックエンドのフレームワーク一覧 -->
  <!--
  <img src="https://img.shields.io/badge/-Django-092E20.svg?logo=django&style=for-the-badge">
  -->
  <!-- バックエンドの言語一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-4285F4.svg?logo=node.js&style=for-the-badge">
   <!--
  <img src="https://img.shields.io/badge/-GAS-4285F4.svg?logo=googleappsscript&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Python-F2C63C.svg?logo=python&style=for-the-badge">
  -->
  <!-- ミドルウェア一覧 -->
  <!--
  <img src="https://img.shields.io/badge/-Nginx-269539.svg?logo=nginx&style=for-the-badge">
  <img src="https://img.shields.io/badge/-MySQL-4479A1.svg?logo=mysql&style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/-Gunicorn-199848.svg?logo=gunicorn&style=for-the-badge&logoColor=white">
  -->
  <img src="https://img.shields.io/badge/-MongoDB-47A248.svg?logo=mongodb&style=for-the-badge">

  <!-- インフラ一覧 -->
  <img src="https://img.shields.io/badge/-vercel-000000.svg?logo=vercel&style=for-the-badge">

  <!--
  <img src="https://img.shields.io/badge/-Google%20cloud-4285F4.svg?logo=google-cloud&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=for-the-badge">
  <img src="https://img.shields.io/badge/-githubactions-FFFFFF.svg?logo=github-actions&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Amazon%20aws-232F3E.svg?logo=amazon-aws&style=for-the-badge">
  <img src="https://img.shields.io/badge/-terraform-20232A?style=for-the-badge&logo=terraform&logoColor=844EBA">
  -->
</p>

## 目次

## プロジェクトの概要

患者情報を集約して、検索／表示する webアプリ。

- プロジェクトの詳細が記載された資料のリンク

## 必要な環境変数やコマンド一覧
## ディレクトリ構成
## 開発環境の構築方法
### Node.js, npm
github codespace を使う場合、もともとインストールされている

### Next.js
1. create-next-app <アプリ名>
    色々設定を聞かれるが、src directory は No, App router は Yes を選択する。それ以外はお好みで
2. <アプリ名>フォルダの中身をすべてリポジトリのフォルダの直下に移動し、<アプリ名>フォルダを削除する

### mongoDB
** Security -> QuickStart ** 
1. Where would you like to connect from? : My Local Environment
2. Add entries to your IP Access List: IPAddress: 0.0.0.0/0, Description: Access from anywhere

** Overview **
1. Connect to your application -> Drivers -> Select your driver and version: Node.js

### mongoose 
mongoDB の ODM
```
npm install mongoose
```

### JSON Web Token
```
npm install jose
```

## トラブルシューティング

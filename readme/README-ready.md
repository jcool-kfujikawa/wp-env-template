# 開発準備
## 1.パッケージのインストール
```bash
npm install
```

## 2.ハッシュ値取得
ハッシュ値はcompose.yamlで使用します。  

```bash
node_modules/.bin/wp-env install-path
```

例）実行結果  
この場合ハッシュ値は`242ad077a237e5d5c0781dd085d26fdf`です。  
```bash
/home/user_name/wp-env/242ad077a237e5d5c0781dd085d26fdf
```

## 3..envファイルを作成する
.env  
```
WP_ENV_HASH={2.で取得した値}_default
```

例）実行結果  
```bash
WP_ENV_HASH=242ad077a237e5d5c0781dd085d26fdf_default
```

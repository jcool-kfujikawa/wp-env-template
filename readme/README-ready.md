# 開発準備
## 1.パッケージのインストール
```bash
npm install
```

## 2.ハッシュ値取得
この場合ハッシュ値は242ad077a237e5d5c0781dd085d26fdf
ハッシュ値はcompose.yamlで使用する
```bash
node_modules/.bin/wp-env install-path
```
▼実行結果
```bash
/home/user_name/wp-env/242ad077a237e5d5c0781dd085d26fdf
```

## 3.compose.yamlを編集する
compose.yaml：22行目
```yaml
name: {2.で取得した値}_default
```
▼実行結果
```bash
name: 242ad077a237e5d5c0781dd085d26fdf_default
```

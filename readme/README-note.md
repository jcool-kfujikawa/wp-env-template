# 注意点
## JSファイルを増やす時
JSファイルを作成したら`npm run watch`を再度実行し直してください。  
設定が読み込まれずエラーが出ることがあります。

## wp-envの起動・停止時のDBの操作
`npm run wp:start`を実行すると`sql/wpenv.sql`がimportされます。  
`npm run wp:stop`を実行すると`sql/wpenv.sql`がexportされます。  

# pj start

提取 facebook 專頁貼文

```
yarn
```

建立 .env 檔案在根目錄，然後輸入參數（不知是什麼的話，下面有教學）

```
yarn start
```

## 用户的TOKEN

用户的TOKEN,要去 https://developers.facebook.com/apps 
開一個 APP
再去 https://developers.facebook.com/tools/explorer/
SELECT 番自己的專頁
再 Generate Access Token 同埋加埋 page access token(係下面User or Page到撰擇)，就OK啦

---

## Get user id

用户的 TOKEN 就是剛剛上面生產的 token，用依個方式可以知道自己的 userid

```
https://graph.facebook.com/me?fields=id&access_token=用户的TOKEN
```

---

## Get long page token

Get long page token 可以增加 token 的到期日

```
curl -i -X GET "https://graph.facebook.com/{graph-api-version}/{user-id}/accounts?access_token={long-lived-user-access-token}"
```

---

## 檢查 token 時間同冇無問題同幾時過期

https://developers.facebook.com/tools/debug/accesstoken/

---

## 資料參考

https://mixedanalytics.com/knowledge-base/import-facebook-page-data-to-google-sheets/
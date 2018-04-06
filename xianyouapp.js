var regex = /https:\/\/[^\s]*/g
var match = regex.exec($context.link || $clipboard.link)
var appurl = match[0]
$clipboard.text=appurl
$app.openURL("xianyou://")

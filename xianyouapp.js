var regex = /https:\/\/[^\s]*/g
var match = regex.exec($context.link || $clipboard.link)
var appurl = match[1]
$clipboard.text=appurl
$app.openURL("xianyou://")

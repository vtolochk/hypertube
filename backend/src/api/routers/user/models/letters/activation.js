module.exports = ({first, activationToken}, l, config) => ({
    text: `
${l['Hi']} ${first}, ${l['and welcome']}.
${l['Here is an activation']} ${l['link']}
http://${config.front}/activate?token=${activationToken}

`,
    html: `
<html>
  <h3>${l['Hi']}</h3>
  <strong>${first}</strong>, ${l['and welcome']}.
  <br>
  ${l['Here is an activation']} 
  <a href="http://${config.front}/activate?token=${activationToken}">${l['link']}</a>
  <br>
</html>

<style>
    html {
        background-color: #5a6268;
    }
</style>

`});

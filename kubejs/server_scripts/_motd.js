PlayerEvents.loggedIn(event => {
    event.player.tell(['Welcome to ', Text.blue('Polytech'), ` on ${global.packmode} mode.`]); // force recast to string
    event.player.tell(['Report pack issues to ', Text.blue('the Github').underlined().clickOpenUrl('https://github.com/ThePansmith/Polytech').hover('Click to open'), '.']);
})
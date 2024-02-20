// ==VickiScript==
// @name quit
// @id quit
// @description Simulate pressing F8 when "quit" is heard
// @utterance quit
// @icon /res/icons/script_native.png
// @permission native
// ==/VickiScript==

$vs.listen('quit', async (req, res) => {
    $vs.native.assertAvailable();

    // Simulate pressing F8 key
    await $vs.native.keyboard.click("{F8}");
    
    // Respond to the user with an empty string
    res.say('').send();
});

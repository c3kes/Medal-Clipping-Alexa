// ==VickiScript==
// @name Quit That
// @id quit.that
// @description Simulate pressing F8 when "quit that" is heard
// @utterance Quit that
// @icon /res/icons/script_native.png
// @permission native
// ==/VickiScript==

$vs.listen('quit that', async (req, res) => {
    $vs.native.assertAvailable();

    // Simulate pressing F8 key
    await $vs.native.keyboard.click("{F8}");
    
    // Respond to the user with an empty string
    res.say('').send();
});

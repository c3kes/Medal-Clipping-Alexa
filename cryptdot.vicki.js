// ==VickiScript==
// @name crypt dot
// @id crypt dot
// @description Simulate pressing F8 when "crypt dot" is heard
// @utterance crypt dot
// @icon /res/icons/script_native.png
// @permission native
// ==/VickiScript==

$vs.listen('crypt dot', async (req, res) => {
    $vs.native.assertAvailable();

    // Simulate pressing F8 key
    await $vs.native.keyboard.click("{F8}");
    
    // Respond to the user with an empty string
    res.say('').send();
});

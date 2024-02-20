// ==VickiScript==
// @name Clip That
// @id clip.that
// @description Simulate pressing F8 when "clip that" is heard
// @utterance Clip that
// @icon /res/icons/script_native.png
// @permission native
// ==/VickiScript==

$vs.listen('clip that', async (req, res) => {
    $vs.native.assertAvailable();

    // Simulate pressing F8 key
    await $vs.native.keyboard.click("{F8}");
    
    // Respond to the user with an empty string
    res.say('').send();
});

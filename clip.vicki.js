// ==VickiScript==
// @name Clip
// @id clip
// @description Simulate pressing F8 when "clip" is heard
// @utterance Clip
// @icon /res/icons/script_native.png
// @permission native
// ==/VickiScript==

$vs.listen('clip', async (req, res) => {
    $vs.native.assertAvailable();

    // Simulate pressing F8 key
    await $vs.native.keyboard.click("{F8}");
    
    // Respond to the user with an empty string
    res.say('').send();
});

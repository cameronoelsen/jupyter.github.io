// Used for create typing effect on JupyterLab page on Collaboration section

var tab2HasRun = false,
    tab3HasRun = false;

$('.lab-collab-preview-nav .lab-collab-preview-nav-item').on('click', function() {
    if ($(this).data('tab') == 'tab-2' && !tab2HasRun) {
        $('#typeout-cell-1').typist({
            text: '# Analyzing Traffic Data',
            blinkSpeed: .05,
            cursorStyles: {color: '#2196F3', width: '2px'},
            speed: 15
        });
        
        $('#typeout-cell-2')
            .on('end_type.typist', function() {
                $('.lab-collab-cell-output').addClass('show-collab-cell-output');
            })
            .typist({
                text: 'plt.scatter(df3[‘hour’])',
                blinkSpeed: .05,
                cursorStyles: {color: '#BB4430', width: '2px'},
                speed: 10
            });
                
        tab2HasRun = true;
    } else if ($(this).data('tab') == 'tab-3' && !tab3HasRun) {
        $('#lab-collab-chat-entry-1').addClass('animate-chat-entry-1');
        $('#lab-collab-chat-entry-2').addClass('animate-chat-entry-2');
        
        var typeChatEntry2 = function() {
            $('#typeout-chat-2').typist({
                text: "Yes! I'll add it to the notebook now."
            });   
        };
        
        window.setTimeout(typeChatEntry2(), 6000);
        tab3HasRun = true;
    }
});
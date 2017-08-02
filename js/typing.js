// Used for create typing effect on JupyterLab page on Collaboration section

var hasRun = false;
$('.lab-collab-preview-nav .lab-collab-preview-nav-item').on('click', function() {
    if ($(this).data('tab') == 'tab-2' && !hasRun) {
        $('#typeout-cell-1').typist({
            text: '# Analyzing Traffic Data',
            blinkSpeed: .05,
            cursorStyles: {color: '#2196F3', width: '2px'}
        });
        
        $('#typeout-cell-2')
            .on('end_type.typist', function() {
                $('.lab-collab-cell-output').addClass('show-collab-cell-output');
            })
            .typist({
                text: 'plt.scatter(df3[‘hour’])',
                blinkSpeed: .05,
                cursorStyles: {color: '#BB4430', width: '2px'},
                speed: 8
            });
        
        
        hasRun = true;
    }
});
Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        // Create a Carousel of Items
        var carousel1 = new Ext.Carousel({
            defaults: {
                cls: 'card'
            },
            items: [{
                html: '<img src="images/w1.png"/>'
            },
            {
                title: 'Tab 2',
                html: '<img src="images/w2.png"/>'
            },
            {
                title: 'Tab 3',
                html: '<img src="images/w3.png"/>'
            },
			{
                title: 'Tab 4',
                html: '<img src="images/w4.png"/>'
            }
			
			
			]
        });
        
        var carousel2 = new Ext.Carousel({
            direction: 'horizontal',
            ui: 'light',
            activeItem: 1,
            defaults: {
                cls: 'Menu1'
            },
            items: [{
                title: 'Tab 1',
                html: '<p><a href="black.html"target="_self"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"target="_self"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a></p>'
            },
            {
                title: 'Tab 2',
                html: '<p><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a></p>'
            },
            {
                title: 'Tab 3',
                html: '<p><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a><a href="index2.html"><img src="images/Custom_Button2.png" alt=""/></a></p>'
            }]
        });

        new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            },
            items: [carousel1, carousel2]
        });
    }
});
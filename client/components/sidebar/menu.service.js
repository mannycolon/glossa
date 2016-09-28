'use strict';

angular.module('glossa')
    .factory('drawerMenu', drawerMenu);

function drawerMenu() {

    var section = [
        {
            name: 'Corpora',
            type: 'toggle',
            pages: [
                {
                    name: 'sub-folder 1',
                    type: 'link',
                    state: 'beers.ipas',
                    icon: 'fa fa-group'
                },
                {
                    name: 'Phonetics',
                    state: 'home.toollist',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                },
                {
                    name: 'Literacy Stories',
                    state: 'home.createTool',
                    type: 'link',
                    icon: 'fa fa-plus'
                }
            ],
            settings: [
                {
                    name: 'Corpora settings 1',
                    type: ''
                },
                {
                    name: 'Corpora settings 2',
                    type: ''
                },
                {
                    name: 'Corpora settings 3',
                    type: ''
                }
            ]
        },
        {
            name: 'Lexicon',
            type: 'toggle',
            pages: [
                {
                    name: 'View / Edit',
                    type: 'link',
                    state: 'beers.ipas',
                    icon: 'fa fa-group'
                },
                {
                    name: 'Export',
                    state: 'home.toollist',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                }
            ],
            settings: [
                {
                    name: 'Lexicon settings 1',
                    type: ''
                },
                {
                    name: 'Lexicon settings 2',
                    type: ''
                },
                {
                    name: 'Lexicon settings 3',
                    type: ''
                }
            ]
        },
        {
            name: 'Grammar',
            type: 'toggle',
            pages: [
                {
                    name: 'Affix Templates',
                    type: 'link',
                    state: 'beers.ipas',
                    icon: 'fa fa-group'
                },
                {
                    name: 'Categories',
                    state: 'home.toollist',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                },
                {
                    name: 'Rules and Features',
                    state: 'home.createTool',
                    type: 'link',
                    icon: 'fa fa-plus'
                }
            ]
        },
        {
            name: 'Notebooks',
            type: 'toggle',
            pages: [
                {
                    name: 'My Notebook',
                    type: 'link',
                    state: 'munchies.cheetos',
                    icon: 'fa fa-group'
                },
                {
                    name: '@matthewtmoran',
                    state: 'munchies.bananachips',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                },
                {
                    name: '@justin_rees',
                    state: 'munchies.donuts',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                }
            ]
        },
        {
            name: 'Help',
            type: 'toggle',
            pages: [
                {
                    name: 'Glossa Basics',
                    type: 'link',
                    state: 'munchies.cheetos',
                    icon: 'fa fa-group'
                },
                {
                    name: 'Grammatical Helps',
                    state: 'munchies.bananachips',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                },
                {
                    name: 'Phonology Helps',
                    state: 'munchies.donuts',
                    type: 'link',
                    icon: 'fa fa-map-marker'
                }
            ],
            settings: [
                {
                    name: 'Help settings 1',
                    type: ''
                },
                {
                    name: 'Help settings 2',
                    type: ''
                },
                {
                    name: 'Help settings 3',
                    type: ''
                }
            ]
        }
    ];

    var service = {
        section: section,
        toggleSelectSection: toggleSelectSection,
        isSectionSelected: isSectionSelected,
        toggleSettingsSection: toggleSettingsSection,
        isSectionSettingsSelected: isSectionSettingsSelected
    };

    return service;
    ///////////////

    function toggleSelectSection(section) {
        service.openedSection = (service.openedSection === section ? null : section);
    };
    function isSectionSelected(section) {
        return service.openedSection === section;
    };

    function toggleSettingsSection(section) {
        console.log('toggleSettingsSection', section);
        service.openSetting = (service.openSetting === section ? null : section);
    }
    function isSectionSettingsSelected(section) {
        return service.openSetting === section;
    }

}
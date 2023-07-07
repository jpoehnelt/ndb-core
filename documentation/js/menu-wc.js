'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ndb-core documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#additional-pages"'
                            : 'data-bs-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Developer Documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/overview.html" data-type="entity-link" data-context-id="additional">Overview</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/tutorial.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' : 'data-bs-target="#xs-additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' }>
                                                <span class="link-name">Tutorial</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' : 'id="xs-additional-page-6794468a17cff7a7d0e67b442fb30e72ef3581855216dac864cc271ec89410453a51ac5332e243886355cb46945ee4cf52c90b65c4ec9af1ba2b7fc3cfaa22d7"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/overview-of-technologies.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Overview of Technologies</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/setting-up-the-project.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Setting up the project</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/using-aam-digital-(as-a-user).html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Using Aam Digital (as a user)</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/diving-into-the-code.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Diving into the Code</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/how-to-guides.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' : 'data-bs-target="#xs-additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' }>
                                                <span class="link-name">How-To Guides</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' : 'id="xs-additional-page-b0f047148a51bc3e1dd7667e9f327a64c1f35810acbee8f79503c8c240bb3716780fbb196df5d7a0927bde69416e3608502b26b7da728b480997d8593a8e0dc6"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/navigate-the-code-structure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Navigate the Code Structure</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/contribute-code-to-the-project.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Contribute Code to the Project</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/load-and-save-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Load and Save Data</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/display-dialogs-and-notifications.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Display Dialogs and Notifications</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/display-related-entities.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Display Related Entities</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/log-errors.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Log Errors</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/write-automated-unit-tests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Write Automated Unit Tests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/write-e2e-tests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Write E2E Tests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/document-code.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Document Code</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/use-queries-and-indices.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Use Queries and Indices</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/create-a-new-entity-type.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Create a New Entity Type</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/generate-demo-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Generate Demo Data</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/review-a-pull-request.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Review a Pull Request</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/create-a-report.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Create a Report</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/format-data-export.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Format Data Export</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/build-localizable-components.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Build Localizable Components</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/work-with-xlf.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Work with XLF</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/add-another-language.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Add Another Language</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/concepts.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' : 'data-bs-target="#xs-additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' }>
                                                <span class="link-name">Concepts</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' : 'id="xs-additional-page-58331cb4cbdd25099c4fb93264bac51d1fd1cd168914a2101cbfde231aa5bdb8f3e7bde9380d5ab143d6815d2b10412620dacce7ec5123a9a4f11a48d8005fb8"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/overall-architecture.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Overall Architecture</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/entity-schema.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Entity Schema</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/session-and-authentication-system.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Session and Authentication System</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/configuration.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Configuration</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/user-roles-and-permissions.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">User Roles and Permissions</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/ux-guidelines.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">UX Guidelines</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/documentation-structure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Documentation Structure</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/infrastructure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Infrastructure</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/prerequisites.html" data-type="entity-link" data-context-id="additional">Prerequisites</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' : 'data-bs-target="#xs-components-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' :
                                            'id="xs-components-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' : 'data-bs-target="#xs-injectables-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' :
                                        'id="xs-injectables-links-module-AppModule-56ad4a29a0ad1b2e5dc3d7cfbc7d37db62f76b1cfa5816ad3cc6eaa6bbc372912f2709b4289ec8b8b2538aa23ebf1536ecd2ac4c06d2c5b56fe61539a0c496c1"' }>
                                        <li class="link">
                                            <a href="injectables/AnalyticsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnalyticsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AttendanceModule.html" data-type="entity-link" >AttendanceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChildrenModule.html" data-type="entity-link" >ChildrenModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurableEnumModule.html" data-type="entity-link" >ConfigurableEnumModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConflictResolutionModule.html" data-type="entity-link" >ConflictResolutionModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' :
                                        'id="xs-injectables-links-module-DatabaseModule-f483c071cb7c5da98f6ed3697407e919e9752b1e14352a668071ee64451fb09517255ef692ebbe33cb13a4f0d7553397bd3d51c35d03355f0120c19844894cb3"' }>
                                        <li class="link">
                                            <a href="injectables/PouchDatabase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PouchDatabase</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseTestingModule.html" data-type="entity-link" >DatabaseTestingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DataImportModule.html" data-type="entity-link" >DataImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DemoDataModule.html" data-type="entity-link" >DemoDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' : 'data-bs-target="#xs-components-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' :
                                            'id="xs-components-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' }>
                                            <li class="link">
                                                <a href="components/DemoDataGeneratingProgressDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoDataGeneratingProgressDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' : 'data-bs-target="#xs-injectables-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' :
                                        'id="xs-injectables-links-module-DemoDataModule-913a175050dd5412cf084d8eabf17cc8c141b1c1cf72131e9c5c5dc798c534ddde14733be3b369be68be3099496c1c28e7c8c7bd3384a159f272f33a92253d1d"' }>
                                        <li class="link">
                                            <a href="injectables/DemoDataInitializerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoDataInitializerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DemoDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileModule.html" data-type="entity-link" >FileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FileModule-c493ed94c4812ce1f76e2a0a95a7d7c376814d001eddcd4f425e08de4a93131371e14aba53138f9941b651cfc6dcc035a41f54687a6dc8ba46678c21991f2fd1"' : 'data-bs-target="#xs-injectables-links-module-FileModule-c493ed94c4812ce1f76e2a0a95a7d7c376814d001eddcd4f425e08de4a93131371e14aba53138f9941b651cfc6dcc035a41f54687a6dc8ba46678c21991f2fd1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileModule-c493ed94c4812ce1f76e2a0a95a7d7c376814d001eddcd4f425e08de4a93131371e14aba53138f9941b651cfc6dcc035a41f54687a6dc8ba46678c21991f2fd1"' :
                                        'id="xs-injectables-links-module-FileModule-c493ed94c4812ce1f76e2a0a95a7d7c376814d001eddcd4f425e08de4a93131371e14aba53138f9941b651cfc6dcc035a41f54687a6dc8ba46678c21991f2fd1"' }>
                                        <li class="link">
                                            <a href="injectables/CouchdbFileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CouchdbFileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MockFileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MockFileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoricalDataModule.html" data-type="entity-link" >HistoricalDataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageModule.html" data-type="entity-link" >LanguageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LatestChangesModule.html" data-type="entity-link" >LatestChangesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LocationModule.html" data-type="entity-link" >LocationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MarkdownPageModule.html" data-type="entity-link" >MarkdownPageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MatchingEntitiesModule.html" data-type="entity-link" >MatchingEntitiesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MockedTestingModule.html" data-type="entity-link" >MockedTestingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotesModule.html" data-type="entity-link" >NotesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-c1eaec118fd89b5bd54d0f48e94a7fd64450a6c4872618e53a9a7c6b47774448d21ad46e9ee8c32c49f0bb20785d61c49664f81b28253b399127050b0313d4cc"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-c1eaec118fd89b5bd54d0f48e94a7fd64450a6c4872618e53a9a7c6b47774448d21ad46e9ee8c32c49f0bb20785d61c49664f81b28253b399127050b0313d4cc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-c1eaec118fd89b5bd54d0f48e94a7fd64450a6c4872618e53a9a7c6b47774448d21ad46e9ee8c32c49f0bb20785d61c49664f81b28253b399127050b0313d4cc"' :
                                        'id="xs-injectables-links-module-PermissionsModule-c1eaec118fd89b5bd54d0f48e94a7fd64450a6c4872618e53a9a7c6b47774448d21ad46e9ee8c32c49f0bb20785d61c49664f81b28253b399127050b0313d4cc"' }>
                                        <li class="link">
                                            <a href="injectables/AbilityService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbilityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntityAbility.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityAbility</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProgressDashboardWidgetModule.html" data-type="entity-link" >ProgressDashboardWidgetModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReportingModule.html" data-type="entity-link" >ReportingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolsModule.html" data-type="entity-link" >SchoolsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SessionModule.html" data-type="entity-link" >SessionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SessionModule-65c2fc2dc689876e1329727413c964d52d0fd03c3a87bb061d566ff293e936e23ac618f165aa5a752534098e5b0ee91e1dd77f8512c41b4cec2429fe39b270a3"' : 'data-bs-target="#xs-injectables-links-module-SessionModule-65c2fc2dc689876e1329727413c964d52d0fd03c3a87bb061d566ff293e936e23ac618f165aa5a752534098e5b0ee91e1dd77f8512c41b4cec2429fe39b270a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionModule-65c2fc2dc689876e1329727413c964d52d0fd03c3a87bb061d566ff293e936e23ac618f165aa5a752534098e5b0ee91e1dd77f8512c41b4cec2429fe39b270a3"' :
                                        'id="xs-injectables-links-module-SessionModule-65c2fc2dc689876e1329727413c964d52d0fd03c3a87bb061d566ff293e936e23ac618f165aa5a752534098e5b0ee91e1dd77f8512c41b4cec2429fe39b270a3"' }>
                                        <li class="link">
                                            <a href="injectables/CouchdbAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CouchdbAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KeycloakAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeycloakAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalSession.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalSession</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RemoteSession.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoteSession</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SyncedSessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SyncedSessionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StorybookBaseModule.html" data-type="entity-link" >StorybookBaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabStateModule.html" data-type="entity-link" >TabStateModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' : 'data-bs-target="#xs-directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' :
                                        'id="xs-directives-links-module-TabStateModule-0540cf9faa31c31929e64865bc3b946450cae36ec472d04a01c3ab4c0fdfb4939fd95b7b3e98f89eb2824ebfe763d29ecd9fe2c438c382551055b0cdfe219d49"' }>
                                        <li class="link">
                                            <a href="directives/TabStateMemoDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabStateMemoDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TodosModule.html" data-type="entity-link" >TodosModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccountPageComponent.html" data-type="entity-link" >AccountPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivitiesOverviewComponent.html" data-type="entity-link" >ActivitiesOverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivityAttendanceSectionComponent.html" data-type="entity-link" >ActivityAttendanceSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivityCardComponent.html" data-type="entity-link" >ActivityCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddDayAttendanceComponent.html" data-type="entity-link" >AddDayAttendanceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminComponent.html" data-type="entity-link" >AdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AlertStoriesHelperComponent.html" data-type="entity-link" >AlertStoriesHelperComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ApplicationLoadingComponent.html" data-type="entity-link" >ApplicationLoadingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppVersionComponent.html" data-type="entity-link" >AppVersionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AserComponent.html" data-type="entity-link" >AserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceBlockComponent.html" data-type="entity-link" >AttendanceBlockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceCalendarComponent.html" data-type="entity-link" >AttendanceCalendarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceDayBlockComponent.html" data-type="entity-link" >AttendanceDayBlockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceDetailsComponent.html" data-type="entity-link" >AttendanceDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceManagerComponent.html" data-type="entity-link" >AttendanceManagerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceStatusSelectComponent.html" data-type="entity-link" >AttendanceStatusSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceSummaryComponent.html" data-type="entity-link" >AttendanceSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AttendanceWeekDashboardComponent.html" data-type="entity-link" >AttendanceWeekDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BackgroundProcessingIndicatorComponent.html" data-type="entity-link" >BackgroundProcessingIndicatorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BasicAutocompleteComponent.html" data-type="entity-link" >BasicAutocompleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BirthdayDashboardComponent.html" data-type="entity-link" >BirthdayDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BmiBlockComponent.html" data-type="entity-link" >BmiBlockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BooleanInputComponent.html" data-type="entity-link" >BooleanInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChangelogComponent.html" data-type="entity-link" >ChangelogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChildBlockComponent.html" data-type="entity-link" >ChildBlockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChildBlockTooltipComponent.html" data-type="entity-link" >ChildBlockTooltipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChildrenBmiDashboardComponent.html" data-type="entity-link" >ChildrenBmiDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChildrenListComponent.html" data-type="entity-link" >ChildrenListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChildSchoolOverviewComponent.html" data-type="entity-link" >ChildSchoolOverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ComingSoonComponent.html" data-type="entity-link" >ComingSoonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CompareRevComponent.html" data-type="entity-link" >CompareRevComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfigImportComponent.html" data-type="entity-link" >ConfigImportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfigureEnumPopupComponent.html" data-type="entity-link" >ConfigureEnumPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" >ConfirmationDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConflictResolutionListComponent.html" data-type="entity-link" >ConflictResolutionListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomIntervalComponent.html" data-type="entity-link" >CustomIntervalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardListWidgetComponent.html" data-type="entity-link" >DashboardListWidgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardShortcutWidgetComponent.html" data-type="entity-link" >DashboardShortcutWidgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardWidgetComponent.html" data-type="entity-link" >DashboardWidgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataImportComponent.html" data-type="entity-link" >DataImportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DateRangeFilterComponent.html" data-type="entity-link" >DateRangeFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DateRangeFilterPanelComponent.html" data-type="entity-link" >DateRangeFilterPanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogButtonsComponent.html" data-type="entity-link" >DialogButtonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogCloseComponent.html" data-type="entity-link" >DialogCloseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisabledWrapperComponent.html" data-type="entity-link" >DisabledWrapperComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayAgeComponent.html" data-type="entity-link" >DisplayAgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayCheckmarkComponent.html" data-type="entity-link" >DisplayCheckmarkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayConfigurableEnumComponent.html" data-type="entity-link" >DisplayConfigurableEnumComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayDateComponent.html" data-type="entity-link" >DisplayDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayEntityArrayComponent.html" data-type="entity-link" >DisplayEntityArrayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayEntityComponent.html" data-type="entity-link" >DisplayEntityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayMonthComponent.html" data-type="entity-link" >DisplayMonthComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayPercentageComponent.html" data-type="entity-link" >DisplayPercentageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayRecurringIntervalComponent.html" data-type="entity-link" >DisplayRecurringIntervalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayTextComponent.html" data-type="entity-link" >DisplayTextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayTodoCompletionComponent.html" data-type="entity-link" >DisplayTodoCompletionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayUnitComponent.html" data-type="entity-link" >DisplayUnitComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditAgeComponent.html" data-type="entity-link" >EditAgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditAttendanceComponent.html" data-type="entity-link" >EditAttendanceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditBooleanComponent.html" data-type="entity-link" >EditBooleanComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditConfigurableEnumComponent.html" data-type="entity-link" >EditConfigurableEnumComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditDateComponent.html" data-type="entity-link" >EditDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditEntityArrayComponent.html" data-type="entity-link" >EditEntityArrayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditFileComponent.html" data-type="entity-link" >EditFileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditLocationComponent.html" data-type="entity-link" >EditLocationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditLongTextComponent.html" data-type="entity-link" >EditLongTextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditMonthComponent.html" data-type="entity-link" >EditMonthComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditNumberComponent.html" data-type="entity-link" >EditNumberComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditPhotoComponent.html" data-type="entity-link" >EditPhotoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditProgressDashboardComponent.html" data-type="entity-link" >EditProgressDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditRecurringIntervalComponent.html" data-type="entity-link" >EditRecurringIntervalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditSingleEntityComponent.html" data-type="entity-link" >EditSingleEntityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditTextComponent.html" data-type="entity-link" >EditTextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditTextWithAutocompleteComponent.html" data-type="entity-link" >EditTextWithAutocompleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EducationalMaterialComponent.html" data-type="entity-link" >EducationalMaterialComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityCountDashboardComponent.html" data-type="entity-link" >EntityCountDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityDetailsComponent.html" data-type="entity-link" >EntityDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityFormComponent.html" data-type="entity-link" >EntityFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityListComponent.html" data-type="entity-link" >EntityListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityPropertyViewComponent.html" data-type="entity-link" >EntityPropertyViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntitySelectComponent.html" data-type="entity-link" >EntitySelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntitySubrecordComponent.html" data-type="entity-link" >EntitySubrecordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EnumDropdownComponent.html" data-type="entity-link" >EnumDropdownComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorHintComponent.html" data-type="entity-link" >ErrorHintComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FaDynamicIconComponent.html" data-type="entity-link" >FaDynamicIconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilterComponent.html" data-type="entity-link" >FilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilterOverlayComponent.html" data-type="entity-link" >FilterOverlayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormComponent.html" data-type="entity-link" >FormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GroupedChildAttendanceComponent.html" data-type="entity-link" >GroupedChildAttendanceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HealthCheckupComponent.html" data-type="entity-link" >HealthCheckupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HistoricalDataComponent.html" data-type="entity-link" >HistoricalDataComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImagePopupComponent.html" data-type="entity-link" >ImagePopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImportantNotesDashboardComponent.html" data-type="entity-link" >ImportantNotesDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFileComponent.html" data-type="entity-link" >InputFileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguageSelectComponent.html" data-type="entity-link" >LanguageSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListFilterComponent.html" data-type="entity-link" >ListFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListPaginatorComponent.html" data-type="entity-link" >ListPaginatorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapComponent.html" data-type="entity-link" >MapComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapPopupComponent.html" data-type="entity-link" >MapPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapPropertiesPopupComponent.html" data-type="entity-link" >MapPropertiesPopupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MarkdownPageComponent.html" data-type="entity-link" >MarkdownPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MatchingEntitiesComponent.html" data-type="entity-link" >MatchingEntitiesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavigationComponent.html" data-type="entity-link" >NavigationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoteAttendanceCountBlockComponent.html" data-type="entity-link" >NoteAttendanceCountBlockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoteDetailsComponent.html" data-type="entity-link" >NoteDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotesDashboardComponent.html" data-type="entity-link" >NotesDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotesManagerComponent.html" data-type="entity-link" >NotesManagerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotesRelatedToEntityComponent.html" data-type="entity-link" >NotesRelatedToEntityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ObjectTableComponent.html" data-type="entity-link" >ObjectTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PasswordFormComponent.html" data-type="entity-link" >PasswordFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PasswordResetComponent.html" data-type="entity-link" >PasswordResetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PillComponent.html" data-type="entity-link" >PillComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrimaryActionComponent.html" data-type="entity-link" >PrimaryActionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressComponent.html" data-type="entity-link" >ProgressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProgressDashboardComponent.html" data-type="entity-link" >ProgressDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublicFormComponent.html" data-type="entity-link" >PublicFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PwaInstallComponent.html" data-type="entity-link" >PwaInstallComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReadonlyFunctionComponent.html" data-type="entity-link" >ReadonlyFunctionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecentAttendanceBlocksComponent.html" data-type="entity-link" >RecentAttendanceBlocksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RelatedEntitiesComponent.html" data-type="entity-link" >RelatedEntitiesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportingComponent.html" data-type="entity-link" >ReportingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportRowComponent.html" data-type="entity-link" >ReportRowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RollCallComponent.html" data-type="entity-link" >RollCallComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RollCallSetupComponent.html" data-type="entity-link" >RollCallSetupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RollCallTabComponent.html" data-type="entity-link" >RollCallTabComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RowDetailsComponent.html" data-type="entity-link" >RowDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SchoolBlockComponent.html" data-type="entity-link" >SchoolBlockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link" >SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectReportComponent.html" data-type="entity-link" >SelectReportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ShowFileComponent.html" data-type="entity-link" >ShowFileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SupportComponent.html" data-type="entity-link" >SupportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SyncStatusComponent.html" data-type="entity-link" >SyncStatusComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TemplateTooltipComponent.html" data-type="entity-link" >TemplateTooltipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TodoCompletionComponent.html" data-type="entity-link" >TodoCompletionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TodoDetailsComponent.html" data-type="entity-link" >TodoDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TodoListComponent.html" data-type="entity-link" >TodoListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TodosDashboardComponent.html" data-type="entity-link" >TodosDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TodosRelatedToEntityComponent.html" data-type="entity-link" >TodosRelatedToEntityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UiComponent.html" data-type="entity-link" >UiComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserAccountComponent.html" data-type="entity-link" >UserAccountComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserSecurityComponent.html" data-type="entity-link" >UserSecurityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewDistanceComponent.html" data-type="entity-link" >ViewDistanceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewFileComponent.html" data-type="entity-link" >ViewFileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewLocationComponent.html" data-type="entity-link" >ViewLocationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewTitleComponent.html" data-type="entity-link" >ViewTitleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WidgetContentComponent.html" data-type="entity-link" >WidgetContentComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BorderHighlightDirective.html" data-type="entity-link" >BorderHighlightDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ConfigurableEnumDirective.html" data-type="entity-link" >ConfigurableEnumDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/CustomFormControlDirective.html" data-type="entity-link" >CustomFormControlDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DisableEntityOperationDirective.html" data-type="entity-link" >DisableEntityOperationDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/DynamicComponentDirective.html" data-type="entity-link" >DynamicComponentDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/EditComponent.html" data-type="entity-link" >EditComponent</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ExportDataDirective.html" data-type="entity-link" >ExportDataDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TemplateTooltipDirective.html" data-type="entity-link" >TemplateTooltipDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ViewDirective.html" data-type="entity-link" >ViewDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ActivityAttendance.html" data-type="entity-link" >ActivityAttendance</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppSettings.html" data-type="entity-link" >AppSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/Aser.html" data-type="entity-link" >Aser</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthService.html" data-type="entity-link" >AuthService</a>
                            </li>
                            <li class="link">
                                <a href="classes/BooleanFilter.html" data-type="entity-link" >BooleanFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Changelog.html" data-type="entity-link" >Changelog</a>
                            </li>
                            <li class="link">
                                <a href="classes/Child.html" data-type="entity-link" >Child</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChildSchoolRelation.html" data-type="entity-link" >ChildSchoolRelation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComponentRegistry.html" data-type="entity-link" >ComponentRegistry</a>
                            </li>
                            <li class="link">
                                <a href="classes/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigurableEnum.html" data-type="entity-link" >ConfigurableEnum</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigurableEnumDatatype.html" data-type="entity-link" >ConfigurableEnumDatatype</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigurableEnumFilter.html" data-type="entity-link" >ConfigurableEnumFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFaker.html" data-type="entity-link" >CustomFaker</a>
                            </li>
                            <li class="link">
                                <a href="classes/Database.html" data-type="entity-link" >Database</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseException.html" data-type="entity-link" >DatabaseException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateFilter.html" data-type="entity-link" >DateFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateWithAge.html" data-type="entity-link" >DateWithAge</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoChildConfig.html" data-type="entity-link" >DemoChildConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataGenerator.html" data-type="entity-link" >DemoDataGenerator</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataServiceConfig.html" data-type="entity-link" >DemoDataServiceConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoEducationMaterialConfig.html" data-type="entity-link" >DemoEducationMaterialConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoEventsConfig.html" data-type="entity-link" >DemoEventsConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoHistoricalDataConfig.html" data-type="entity-link" >DemoHistoricalDataConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoNoteConfig.html" data-type="entity-link" >DemoNoteConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoSchoolConfig.html" data-type="entity-link" >DemoSchoolConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoTodoConfig.html" data-type="entity-link" >DemoTodoConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/EducationalMaterial.html" data-type="entity-link" >EducationalMaterial</a>
                            </li>
                            <li class="link">
                                <a href="classes/Entity.html" data-type="entity-link" >Entity</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityFilter.html" data-type="entity-link" >EntityFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityRegistry.html" data-type="entity-link" >EntityRegistry</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventAttendance.html" data-type="entity-link" >EventAttendance</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventNote.html" data-type="entity-link" >EventNote</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileService.html" data-type="entity-link" >FileService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Filter.html" data-type="entity-link" >Filter</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthCheck.html" data-type="entity-link" >HealthCheck</a>
                            </li>
                            <li class="link">
                                <a href="classes/HistoricalEntityData.html" data-type="entity-link" >HistoricalEntityData</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidFormFieldError.html" data-type="entity-link" >InvalidFormFieldError</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationTest.html" data-type="entity-link" >LocationTest</a>
                            </li>
                            <li class="link">
                                <a href="classes/MarkedRendererCustom.html" data-type="entity-link" >MarkedRendererCustom</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockEntityMapperService.html" data-type="entity-link" >MockEntityMapperService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObservableMatchersImpl.html" data-type="entity-link" >ObservableMatchersImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/ObservableQueue.html" data-type="entity-link" >ObservableQueue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressDashboardConfig.html" data-type="entity-link" >ProgressDashboardConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublicFormConfig.html" data-type="entity-link" >PublicFormConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryDataSource.html" data-type="entity-link" >QueryDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecurringActivity.html" data-type="entity-link" >RecurringActivity</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecurringIntervalTestEntity.html" data-type="entity-link" >RecurringIntervalTestEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Registry.html" data-type="entity-link" >Registry</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectableFilter.html" data-type="entity-link" >SelectableFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionService.html" data-type="entity-link" >SessionService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Test.html" data-type="entity-link" >Test</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestEntity.html" data-type="entity-link" >TestEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestEntity-1.html" data-type="entity-link" >TestEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeInterval.html" data-type="entity-link" >TimeInterval</a>
                            </li>
                            <li class="link">
                                <a href="classes/Todo.html" data-type="entity-link" >Todo</a>
                            </li>
                            <li class="link">
                                <a href="classes/TodoCompletion.html" data-type="entity-link" >TodoCompletion</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMetadata.html" data-type="entity-link" >UpdateMetadata</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttendanceService.html" data-type="entity-link" >AttendanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AutoResolutionService.html" data-type="entity-link" >AutoResolutionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BackupService.html" data-type="entity-link" >BackupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChildrenService.html" data-type="entity-link" >ChildrenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComingSoonDialogService.html" data-type="entity-link" >ComingSoonDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigImportParserService.html" data-type="entity-link" >ConfigImportParserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigurableEnumService.html" data-type="entity-link" >ConfigurableEnumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfirmationDialogService.html" data-type="entity-link" >ConfirmationDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataAggregationService.html" data-type="entity-link" >DataAggregationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseIndexingService.html" data-type="entity-link" >DatabaseIndexingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataImportService.html" data-type="entity-link" >DataImportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataTransformationService.html" data-type="entity-link" >DataTransformationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DateAdapterWithFormatting.html" data-type="entity-link" >DateAdapterWithFormatting</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoActivityEventsGeneratorService.html" data-type="entity-link" >DemoActivityEventsGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoActivityGeneratorService.html" data-type="entity-link" >DemoActivityGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoAserGeneratorService.html" data-type="entity-link" >DemoAserGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildGenerator.html" data-type="entity-link" >DemoChildGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildSchoolRelationGenerator.html" data-type="entity-link" >DemoChildSchoolRelationGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoConfigGeneratorService.html" data-type="entity-link" >DemoConfigGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoConfigurableEnumGeneratorService.html" data-type="entity-link" >DemoConfigurableEnumGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoEducationalMaterialGeneratorService.html" data-type="entity-link" >DemoEducationalMaterialGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoHealthCheckGeneratorService.html" data-type="entity-link" >DemoHealthCheckGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoHistoricalDataGenerator.html" data-type="entity-link" >DemoHistoricalDataGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoNoteGeneratorService.html" data-type="entity-link" >DemoNoteGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoPermissionGeneratorService.html" data-type="entity-link" >DemoPermissionGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoProgressDashboardWidgetGeneratorService.html" data-type="entity-link" >DemoProgressDashboardWidgetGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoPublicFormGeneratorService.html" data-type="entity-link" >DemoPublicFormGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoSchoolGenerator.html" data-type="entity-link" >DemoSchoolGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoTodoGeneratorService.html" data-type="entity-link" >DemoTodoGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoUserGeneratorService.html" data-type="entity-link" >DemoUserGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DownloadService.html" data-type="entity-link" >DownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicValidatorsService.html" data-type="entity-link" >DynamicValidatorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityConfigService.html" data-type="entity-link" >EntityConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityFormService.html" data-type="entity-link" >EntityFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityMapperService.html" data-type="entity-link" >EntityMapperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntityRemoveService.html" data-type="entity-link" >EntityRemoveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntitySchemaService.html" data-type="entity-link" >EntitySchemaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterGeneratorService.html" data-type="entity-link" >FilterGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterService.html" data-type="entity-link" >FilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormDialogService.html" data-type="entity-link" >FormDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeoService.html" data-type="entity-link" >GeoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoricalDataService.html" data-type="entity-link" >HistoricalDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HorizontalHammerConfig.html" data-type="entity-link" >HorizontalHammerConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatestChangesDialogService.html" data-type="entity-link" >LatestChangesDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatestChangesService.html" data-type="entity-link" >LatestChangesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingErrorHandler.html" data-type="entity-link" >LoggingErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingService.html" data-type="entity-link" >LoggingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionEnforcerService.html" data-type="entity-link" >PermissionEnforcerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PwaInstallService.html" data-type="entity-link" >PwaInstallService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryService.html" data-type="entity-link" >QueryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterService.html" data-type="entity-link" >RouterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreenWidthObserver.html" data-type="entity-link" >ScreenWidthObserver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodoService.html" data-type="entity-link" >TodoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnsavedChangesService.html" data-type="entity-link" >UnsavedChangesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateManagerService.html" data-type="entity-link" >UpdateManagerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/UserRoleGuard.html" data-type="entity-link" >UserRoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddDayAttendanceConfig.html" data-type="entity-link" >AddDayAttendanceConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aggregation.html" data-type="entity-link" >Aggregation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AlertConfig.html" data-type="entity-link" >AlertConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceInfo.html" data-type="entity-link" >AttendanceInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceReport.html" data-type="entity-link" >AttendanceReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceStatusType.html" data-type="entity-link" >AttendanceStatusType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceWeekRow.html" data-type="entity-link" >AttendanceWeekRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthUser.html" data-type="entity-link" >AuthUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AverageAttendanceStats.html" data-type="entity-link" >AverageAttendanceStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BackgroundProcessState.html" data-type="entity-link" >BackgroundProcessState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BasicFilterConfig.html" data-type="entity-link" >BasicFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BmiRow.html" data-type="entity-link" >BmiRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BooleanFilterConfig.html" data-type="entity-link" >BooleanFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CalculateReportOptions.html" data-type="entity-link" >CalculateReportOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnGroupsConfig.html" data-type="entity-link" >ColumnGroupsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigFieldRaw.html" data-type="entity-link" >ConfigFieldRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurableEnumFilterConfig.html" data-type="entity-link" >ConfigurableEnumFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurableEnumValue.html" data-type="entity-link" >ConfigurableEnumValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmationDialogButton.html" data-type="entity-link" >ConfirmationDialogButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmationDialogConfig.html" data-type="entity-link" >ConfirmationDialogConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConflictResolutionStrategy.html" data-type="entity-link" >ConflictResolutionStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Coordinates.html" data-type="entity-link" >Coordinates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseRules.html" data-type="entity-link" >DatabaseRules</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateRangeFilterConfig.html" data-type="entity-link" >DateRangeFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateRangeFilterConfigOption.html" data-type="entity-link" >DateRangeFilterConfigOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DetailsComponentData.html" data-type="entity-link" >DetailsComponentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DynamicComponentConfig.html" data-type="entity-link" >DynamicComponentConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditProgressDashboardComponentData.html" data-type="entity-link" >EditProgressDashboardComponentData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EncryptedPassword.html" data-type="entity-link" >EncryptedPassword</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityConfig.html" data-type="entity-link" >EntityConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityDetailsConfig.html" data-type="entity-link" >EntityDetailsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityListConfig.html" data-type="entity-link" >EntityListConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityPropertyMap.html" data-type="entity-link" >EntityPropertyMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaDatatype.html" data-type="entity-link" >EntitySchemaDatatype</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaField.html" data-type="entity-link" >EntitySchemaField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySubrecordConfig.html" data-type="entity-link" >EntitySubrecordConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityWithBirthday.html" data-type="entity-link" >EntityWithBirthday</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityWithRecentNoteInfo.html" data-type="entity-link" >EntityWithRecentNoteInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExportColumnConfig.html" data-type="entity-link" >ExportColumnConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExportRow.html" data-type="entity-link" >ExportRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExtendedAlertConfig.html" data-type="entity-link" >ExtendedAlertConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterOverlayData.html" data-type="entity-link" >FilterOverlayData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterSelectionOption.html" data-type="entity-link" >FilterSelectionOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FlattenedReportRow.html" data-type="entity-link" >FlattenedReportRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormFieldConfig.html" data-type="entity-link" >FormFieldConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeoResult.html" data-type="entity-link" >GeoResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupByDescription.html" data-type="entity-link" >GroupByDescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupConfig.html" data-type="entity-link" >GroupConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HasOrdinal.html" data-type="entity-link" >HasOrdinal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImportMetaData.html" data-type="entity-link" >ImportMetaData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InteractionType.html" data-type="entity-link" >InteractionType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KeycloakUser.html" data-type="entity-link" >KeycloakUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocalUser.html" data-type="entity-link" >LocalUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapConfig.html" data-type="entity-link" >MapConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapPopupConfig.html" data-type="entity-link" >MapPopupConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkdownPageConfig.html" data-type="entity-link" >MarkdownPageConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchingEntitiesConfig.html" data-type="entity-link" >MatchingEntitiesConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchingSide.html" data-type="entity-link" >MatchingSide</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchingSideConfig.html" data-type="entity-link" >MatchingSideConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavigationMenuConfig.html" data-type="entity-link" >NavigationMenuConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewMatchAction.html" data-type="entity-link" >NewMatchAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotesManagerConfig.html" data-type="entity-link" >NotesManagerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ObservableMatchers.html" data-type="entity-link" >ObservableMatchers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OIDCTokenResponse.html" data-type="entity-link" >OIDCTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Panel.html" data-type="entity-link" >Panel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelComponent.html" data-type="entity-link" >PanelComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PanelConfig.html" data-type="entity-link" >PanelConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParsedData.html" data-type="entity-link" >ParsedData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrebuiltFilterConfig.html" data-type="entity-link" >PrebuiltFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrebuiltFilterConfig-1.html" data-type="entity-link" >PrebuiltFilterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProgressDashboardPart.html" data-type="entity-link" >ProgressDashboardPart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RemoveEntityTextOptions.html" data-type="entity-link" >RemoveEntityTextOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportConfig.html" data-type="entity-link" >ReportConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportingComponentConfig.html" data-type="entity-link" >ReportingComponentConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportRow.html" data-type="entity-link" >ReportRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteData.html" data-type="entity-link" >RouteData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectableOption.html" data-type="entity-link" >SelectableOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableRow.html" data-type="entity-link" >TableRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UiConfig.html" data-type="entity-link" >UiConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatedEntity.html" data-type="entity-link" >UpdatedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UsageAnalyticsConfig.html" data-type="entity-link" >UsageAnalyticsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewConfig.html" data-type="entity-link" >ViewConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ViewDistanceConfig.html" data-type="entity-link" >ViewDistanceConfig</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/EntityFunctionPipe.html" data-type="entity-link" >EntityFunctionPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
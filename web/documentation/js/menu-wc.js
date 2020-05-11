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
                    <a href="index.html" data-type="index-link">web documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Keresendő kifejezés"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Bevezető</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Áttekintés
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Függőségek
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modulok</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6fc01aaf6a996f9cc6b5b8cdcab586fe"' : 'data-target="#xs-components-links-module-AppModule-6fc01aaf6a996f9cc6b5b8cdcab586fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6fc01aaf6a996f9cc6b5b8cdcab586fe"' :
                                            'id="xs-components-links-module-AppModule-6fc01aaf6a996f9cc6b5b8cdcab586fe"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CareModule.html" data-type="entity-link">CareModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CareModule-bd97ea0ffadd8a687fd32cff7699fd52"' : 'data-target="#xs-components-links-module-CareModule-bd97ea0ffadd8a687fd32cff7699fd52"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CareModule-bd97ea0ffadd8a687fd32cff7699fd52"' :
                                            'id="xs-components-links-module-CareModule-bd97ea0ffadd8a687fd32cff7699fd52"' }>
                                            <li class="link">
                                                <a href="components/CareComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CareComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarePlanAddModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarePlanAddModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GoalAddModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GoalAddModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdAddModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OdAddModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DecourseModule.html" data-type="entity-link">DecourseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DecourseModule-d64a3bdb217f420e6e6d84bc085c9f72"' : 'data-target="#xs-components-links-module-DecourseModule-d64a3bdb217f420e6e6d84bc085c9f72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DecourseModule-d64a3bdb217f420e6e6d84bc085c9f72"' :
                                            'id="xs-components-links-module-DecourseModule-d64a3bdb217f420e6e6d84bc085c9f72"' }>
                                            <li class="link">
                                                <a href="components/DecourseAddModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DecourseAddModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DecourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DecourseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetectionPageModule.html" data-type="entity-link">DetectionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetectionPageModule-83143232b54cadfcf8e9065b6d99dccf"' : 'data-target="#xs-components-links-module-DetectionPageModule-83143232b54cadfcf8e9065b6d99dccf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetectionPageModule-83143232b54cadfcf8e9065b6d99dccf"' :
                                            'id="xs-components-links-module-DetectionPageModule-83143232b54cadfcf8e9065b6d99dccf"' }>
                                            <li class="link">
                                                <a href="components/DetectionPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetectionPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SleepChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SleepChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceAddPageModule.html" data-type="entity-link">DeviceAddPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeviceAddPageModule-0d77fbc3d708fa6a0d51c7394140fa74"' : 'data-target="#xs-components-links-module-DeviceAddPageModule-0d77fbc3d708fa6a0d51c7394140fa74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeviceAddPageModule-0d77fbc3d708fa6a0d51c7394140fa74"' :
                                            'id="xs-components-links-module-DeviceAddPageModule-0d77fbc3d708fa6a0d51c7394140fa74"' }>
                                            <li class="link">
                                                <a href="components/DeviceAddPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeviceAddPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceDetailsPageModule.html" data-type="entity-link">DeviceDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeviceDetailsPageModule-8693530a392dc48dc9b08d383e104256"' : 'data-target="#xs-components-links-module-DeviceDetailsPageModule-8693530a392dc48dc9b08d383e104256"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeviceDetailsPageModule-8693530a392dc48dc9b08d383e104256"' :
                                            'id="xs-components-links-module-DeviceDetailsPageModule-8693530a392dc48dc9b08d383e104256"' }>
                                            <li class="link">
                                                <a href="components/DeviceDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeviceDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceListPageModule.html" data-type="entity-link">DeviceListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeviceListPageModule-d70cd5cae5fd4b6ccfd2ac4dfdfb2976"' : 'data-target="#xs-components-links-module-DeviceListPageModule-d70cd5cae5fd4b6ccfd2ac4dfdfb2976"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeviceListPageModule-d70cd5cae5fd4b6ccfd2ac4dfdfb2976"' :
                                            'id="xs-components-links-module-DeviceListPageModule-d70cd5cae5fd4b6ccfd2ac4dfdfb2976"' }>
                                            <li class="link">
                                                <a href="components/DeviceListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeviceListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LazyCHEmailModule.html" data-type="entity-link">LazyCHEmailModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LazyCHPasswordModule.html" data-type="entity-link">LazyCHPasswordModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainPageModule.html" data-type="entity-link">MainPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainPageModule-fe0df68efc2ef6f73100f348a4ac0e2a"' : 'data-target="#xs-components-links-module-MainPageModule-fe0df68efc2ef6f73100f348a4ac0e2a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainPageModule-fe0df68efc2ef6f73100f348a4ac0e2a"' :
                                            'id="xs-components-links-module-MainPageModule-fe0df68efc2ef6f73100f348a4ac0e2a"' }>
                                            <li class="link">
                                                <a href="components/MainPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MedicalChartModule.html" data-type="entity-link">MedicalChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MedicalChartModule-17f9b4bcc14a4ef9b63ecc730eab4490"' : 'data-target="#xs-components-links-module-MedicalChartModule-17f9b4bcc14a4ef9b63ecc730eab4490"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MedicalChartModule-17f9b4bcc14a4ef9b63ecc730eab4490"' :
                                            'id="xs-components-links-module-MedicalChartModule-17f9b4bcc14a4ef9b63ecc730eab4490"' }>
                                            <li class="link">
                                                <a href="components/AppointmentModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppointmentModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConditionModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConditionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicalChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MedicalChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedicationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MedicationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TakedMedicationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TakedMedicationModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObservationListPageModule.html" data-type="entity-link">ObservationListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ObservationListPageModule-8ce4c76eca40b4b6275d52731c96dcdd"' : 'data-target="#xs-components-links-module-ObservationListPageModule-8ce4c76eca40b4b6275d52731c96dcdd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObservationListPageModule-8ce4c76eca40b4b6275d52731c96dcdd"' :
                                            'id="xs-components-links-module-ObservationListPageModule-8ce4c76eca40b4b6275d52731c96dcdd"' }>
                                            <li class="link">
                                                <a href="components/ObservationListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObservationListPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SleepChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SleepChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientAddPageModule.html" data-type="entity-link">PatientAddPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatientAddPageModule-f2ede8367cd91f69a0c2bb6f464a9e9f"' : 'data-target="#xs-components-links-module-PatientAddPageModule-f2ede8367cd91f69a0c2bb6f464a9e9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatientAddPageModule-f2ede8367cd91f69a0c2bb6f464a9e9f"' :
                                            'id="xs-components-links-module-PatientAddPageModule-f2ede8367cd91f69a0c2bb6f464a9e9f"' }>
                                            <li class="link">
                                                <a href="components/PatientAddPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientAddPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientDetailsPageModule.html" data-type="entity-link">PatientDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatientDetailsPageModule-5d60314bb83e152215d9302375a40c4f"' : 'data-target="#xs-components-links-module-PatientDetailsPageModule-5d60314bb83e152215d9302375a40c4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatientDetailsPageModule-5d60314bb83e152215d9302375a40c4f"' :
                                            'id="xs-components-links-module-PatientDetailsPageModule-5d60314bb83e152215d9302375a40c4f"' }>
                                            <li class="link">
                                                <a href="components/PatientDetailsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientListPageModule.html" data-type="entity-link">PatientListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatientListPageModule-c7422357eac2dd695c9ed39370bff151"' : 'data-target="#xs-components-links-module-PatientListPageModule-c7422357eac2dd695c9ed39370bff151"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatientListPageModule-c7422357eac2dd695c9ed39370bff151"' :
                                            'id="xs-components-links-module-PatientListPageModule-c7422357eac2dd695c9ed39370bff151"' }>
                                            <li class="link">
                                                <a href="components/PatientListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-70500820a569eb27a9f5d50434bd425e"' : 'data-target="#xs-pipes-links-module-PipesModule-70500820a569eb27a9f5d50434bd425e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipe-ok</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-70500820a569eb27a9f5d50434bd425e"' :
                                            'id="xs-pipes-links-module-PipesModule-70500820a569eb27a9f5d50434bd425e"' }>
                                            <li class="link">
                                                <a href="pipes/MinuteToHourPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MinuteToHourPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-f05a21d0101f38e296ae06f319d3392c"' : 'data-target="#xs-components-links-module-ProfilePageModule-f05a21d0101f38e296ae06f319d3392c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-f05a21d0101f38e296ae06f319d3392c"' :
                                            'id="xs-components-links-module-ProfilePageModule-f05a21d0101f38e296ae06f319d3392c"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-181a671c7d3ce1c8847c87defce3dc18"' : 'data-target="#xs-components-links-module-SettingsPageModule-181a671c7d3ce1c8847c87defce3dc18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-181a671c7d3ce1c8847c87defce3dc18"' :
                                            'id="xs-components-links-module-SettingsPageModule-181a671c7d3ce1c8847c87defce3dc18"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SleepPageModule.html" data-type="entity-link">SleepPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SleepPageModule-04f4f339e1f444317663976da8f7cc95"' : 'data-target="#xs-components-links-module-SleepPageModule-04f4f339e1f444317663976da8f7cc95"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SleepPageModule-04f4f339e1f444317663976da8f7cc95"' :
                                            'id="xs-components-links-module-SleepPageModule-04f4f339e1f444317663976da8f7cc95"' }>
                                            <li class="link">
                                                <a href="components/SleepPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SleepPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecificDatasModule.html" data-type="entity-link">SpecificDatasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' : 'data-target="#xs-components-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponensek</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' :
                                            'id="xs-components-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' }>
                                            <li class="link">
                                                <a href="components/SpecificDatasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpecificDatasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' : 'data-target="#xs-directives-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Direktívák</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' :
                                        'id="xs-directives-links-module-SpecificDatasModule-c8124b72fca74e9ac1252e676b091cd9"' }>
                                        <li class="link">
                                            <a href="directives/GinaControllerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GinaControllerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Komponensek</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SleepChartComponent-1.html" data-type="entity-link">SleepChartComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injektálhatók</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AllergyIntoleranceService.html" data-type="entity-link">AllergyIntoleranceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppointmentService.html" data-type="entity-link">AppointmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BloodTypeService.html" data-type="entity-link">BloodTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarePlanService.html" data-type="entity-link">CarePlanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConditionService.html" data-type="entity-link">ConditionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DecourseService.html" data-type="entity-link">DecourseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceService.html" data-type="entity-link">DeviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralCarePlanService.html" data-type="entity-link">GeneralCarePlanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GinaService.html" data-type="entity-link">GinaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoalService.html" data-type="entity-link">GoalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicationRequestService.html" data-type="entity-link">MedicationRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicationRequestService-1.html" data-type="entity-link">MedicationRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicationService.html" data-type="entity-link">MedicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicationStatementService.html" data-type="entity-link">MedicationStatementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObservationDefinitionService.html" data-type="entity-link">ObservationDefinitionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientService.html" data-type="entity-link">PatientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProvenanceService.html" data-type="entity-link">ProvenanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SleepObservationService.html" data-type="entity-link">SleepObservationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Egyéb</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Változók</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Útvonalak</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Dokumentáció lefedettség</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        A dokumentációt generálta: <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
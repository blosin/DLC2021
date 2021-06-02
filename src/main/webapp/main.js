(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/IAa":
/*!************************************************!*\
  !*** ./src/app/Servicios/categoria.service.ts ***!
  \************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CategoriaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.resourceUrl = 'http://' + window.location.hostname + ':3000/issues_api/';
    }
    getById(id) {
        return this.httpClient.get(this.resourceUrl + 'getCategories?id=' + id);
    }
    getCategoriaInfo(id) {
        return this.httpClient.get(this.resourceUrl + 'getinfoCategory?id=' + id);
    }
}
CategoriaService.ɵfac = function CategoriaService_Factory(t) { return new (t || CategoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriaService, factory: CategoriaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\descazrgas\CLIP\ASC\Proyectoaverage\ProyectoAverage\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EcCY":
/*!*********************************************!*\
  !*** ./src/app/Servicios/evento.service.ts ***!
  \*********************************************/
/*! exports provided: EventoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoService", function() { return EventoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EventoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.resourceUrl = 'http://' + window.location.hostname + ':3000/issues_api/';
    }
    getAverages1ProyectoResolved(nro, nro2) {
        return this.httpClient.get(this.resourceUrl + 'AvgProject?id=' + nro + '&id2=' + nro2);
    }
    getAverages1Proyecto1CategoriaResolved(nro, nro2) {
        return this.httpClient.get(this.resourceUrl + 'AvgPryCat?id=' + nro + '&id2=' + nro2);
    }
    getAverages1ProyectoTodasCategoriasResolved(nro, nro2) {
        return this.httpClient.get(this.resourceUrl + 'AvgPryAllCat?id=' + nro + '&id2=' + nro2);
    }
    getAveragesTodosProyectos0categoriaResolved(nro2) {
        return this.httpClient.get(this.resourceUrl + 'AvgAllProjects?id2=' + nro2);
    }
    getAverages1Proyecto(nro) {
        return this.httpClient.get(this.resourceUrl + 'AvgProject?id=' + nro);
    }
    getAverages1Proyecto1Categoria(nro) {
        return this.httpClient.get(this.resourceUrl + 'AvgPryCat?id=' + nro);
    }
    getAverages1ProyectoTodasCategorias(nro) {
        return this.httpClient.get(this.resourceUrl + 'AvgPryAllCat?id=' + nro);
    }
    getAveragesTodosProyectos0categoria() {
        return this.httpClient.get(this.resourceUrl + 'AvgAllProjects');
    }
    get() {
        return this.httpClient.get(this.resourceUrl + '');
    }
}
EventoService.ɵfac = function EventoService_Factory(t) { return new (t || EventoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EventoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventoService, factory: EventoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Componentes_average_average_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/average/average.component */ "uuRU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_Componentes_average_average_component__WEBPACK_IMPORTED_MODULE_2__["AverageComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_Componentes_average_average_component__WEBPACK_IMPORTED_MODULE_2__["AverageComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _Componentes_average_average_component__WEBPACK_IMPORTED_MODULE_2__["AverageComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_Componentes_average_average_component__WEBPACK_IMPORTED_MODULE_2__["AverageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aVZE":
/*!********************************************************!*\
  !*** ./src/app/Servicios/statuses-de-issue.service.ts ***!
  \********************************************************/
/*! exports provided: StatusesDeIssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusesDeIssueService", function() { return StatusesDeIssueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class StatusesDeIssueService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.resourceUrl = 'http://' + window.location.hostname + ':3000/issue_statuses.json';
    }
    get() {
        return this.httpClient.get(this.resourceUrl);
    }
}
StatusesDeIssueService.ɵfac = function StatusesDeIssueService_Factory(t) { return new (t || StatusesDeIssueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
StatusesDeIssueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatusesDeIssueService, factory: StatusesDeIssueService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusesDeIssueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "elPy":
/*!**********************************************!*\
  !*** ./src/app/Servicios/project.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProjectService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.resourceUrl = 'http://' + window.location.hostname + ':3000/issues_api/projects';
    }
    get() {
        return this.httpClient.get(this.resourceUrl);
    }
    getNameProject(id) {
        return this.httpClient.get(this.resourceUrl + '?id=' + id); //FALTAAAAAAAAAAAA
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uuRU":
/*!**********************************************************!*\
  !*** ./src/app/Componentes/average/average.component.ts ***!
  \**********************************************************/
/*! exports provided: AverageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverageComponent", function() { return AverageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Servicios_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Servicios/project.service */ "elPy");
/* harmony import */ var src_app_Servicios_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Servicios/categoria.service */ "/IAa");
/* harmony import */ var src_app_Servicios_evento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Servicios/evento.service */ "EcCY");
/* harmony import */ var src_app_Servicios_statuses_de_issue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Servicios/statuses-de-issue.service */ "aVZE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AverageComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", opt_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u200C", opt_r5.name, " ");
} }
function AverageComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " enter value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AverageComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", opt_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u200C", opt_r6.name, " ");
} }
function AverageComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " enter value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AverageComponent_div_41_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dto_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dto_r8.Proyecto.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dto_r8.Categoria.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dto_r8.Average);
} }
function AverageComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Average");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AverageComponent_div_41_tr_11_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.Lista);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
//import { ObjectUnsubscribedError } from 'rxjs';
class AverageComponent {
    constructor(formBuilder, projectService, categoriaService, eventoService, statusesDeIssueService) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.categoriaService = categoriaService;
        this.eventoService = eventoService;
        this.statusesDeIssueService = statusesDeIssueService;
        this.Accion = '';
        this.OpcionesProyectos = [];
        this.OpcionesCategoria = [];
        this.submitted = false;
        this.Resultado = '';
        this.Lista = [];
        this.SinBusquedasRealizadas = true;
    }
    ngOnInit() {
        this.Form = this.formBuilder.group({
            IdProyecto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            IdCategoria: [''],
            ChResolved: [false]
        });
        this.GetProyectos();
    }
    Calcular() {
        //console.log(this.Form.value.IdProyecto);
        //console.log(this.Form.value.IdCategoria);
        /*switch (this.Form.value.IdProyecto) {
          case '':
            
            break;
        
          default:
            break;
        }*/
        if (this.Form.value.IdProyecto === '') {
            console.log(window.location.hostname);
            //console.log('entro con 0 a \'\'');
            this.submitted = true;
            //console.log(this.Form.value.ChResolved);
            return;
        }
        //if()
        if (this.Form.value.ChResolved == false) {
            //console.log("el valor de el checkbox es false");
            if (this.Form.value.IdProyecto == 0) { //si
                //console.log('entro a la opcion');
                // this.projectService.get().subscribe((res: any)=>{
                if (this.Form.value.IdCategoria === '') {
                    this.eventoService.getAveragesTodosProyectos0categoria().subscribe((res) => {
                        const itemCopy4 = Object.assign({}, res);
                        let ListaEventos = [];
                        let milength = Object.keys(itemCopy4).length;
                        for (let i = 0; i < milength; i++) {
                            let evento = {};
                            let proyecto = {};
                            let categoria = {};
                            proyecto.id = itemCopy4[i].project_id;
                            var avg = itemCopy4[i].avg.substr(0, 19).split(".");
                            evento.Average = avg[0];
                            //evento.Average=itemCopy4[i].avg;
                            categoria.id = 0;
                            categoria.name = '----';
                            evento.Categoria = categoria; //cambiar a consulta a todos los proyectos 
                            this.projectService.getNameProject(itemCopy4[i].project_id).subscribe((res2) => {
                                const itemCopy5 = Object.assign({}, res2);
                                proyecto.name = itemCopy5[0].name;
                            });
                            evento.Proyecto = proyecto;
                            ListaEventos.push(evento);
                        }
                        this.Lista = ListaEventos;
                    });
                    return;
                }
                else {
                    //console.log('entro como categoria ALL-ALL');
                    this.Lista = [];
                    //let idProyecto=0
                    this.projectService.get().subscribe((res) => {
                        const itemCopy = Object.assign({}, res);
                        let ListaEventosx = [];
                        let milegnht = Object.keys(itemCopy).length;
                        for (let i = 0; i < milegnht; i++) {
                            //let miProject={} as Project;     
                            this.eventoService.getAverages1ProyectoTodasCategorias(itemCopy[i].id).subscribe((res6x) => {
                                const itemCopy10x = Object.assign({}, res6x);
                                let milength2x = Object.keys(itemCopy10x).length;
                                for (let i2 = 0; i2 < milength2x; i2++) {
                                    let proyecto = {};
                                    let categoria = {};
                                    let evento = {};
                                    proyecto.id = itemCopy[i].id;
                                    proyecto.name = itemCopy[i].name;
                                    categoria.name = itemCopy10x[i2].name;
                                    categoria.id = 0;
                                    evento.Proyecto = proyecto;
                                    evento.Categoria = categoria;
                                    var avg = itemCopy10x[i2].avg.substr(0, 19).split(".");
                                    evento.Average = avg[0];
                                    ListaEventosx.push(evento);
                                }
                            });
                        }
                        this.Lista = ListaEventosx;
                    });
                    //this.eventoService.getAverages1ProyectoTodasCategorias(this.Form.value.IdProyecto).subscribe((res6:any)=>{      
                    /* miProject.id=itemCopy.projects[i].id;
                      miProject.name=itemCopy.projects[i].name;
                      miProject.identifier=itemCopy.projects[i].identifier;
                      miProject.description=itemCopy.projects[i].description;
                      miProject.status=itemCopy.projects[i].status;
                      miProject.is_public=itemCopy.projects[i].is_public;
                      miProject.created_on=itemCopy.projects[i].created_on;
                      miProject.updated_on=itemCopy.projects[i].updated_on;
                      ListaProyectos.push(miProject);*/
                    //ListaProyectos.this.OpcionesProyectos=ListaProyectos;
                }
            }
            else {
                if (this.Form.value.IdCategoria === '') { //si
                    //console.log('entro por categoria=\'\'');
                    this.eventoService.getAverages1Proyecto(this.Form.value.IdProyecto).subscribe((res3) => {
                        //console.log(this.Form.value.IdProyecto);
                        const itemCopy6 = Object.assign({}, res3);
                        let ListaEventos = [];
                        let evento = {};
                        let proyecto = {};
                        let categoria = {};
                        var avg = itemCopy6[0].avg.substr(0, 19).split(".");
                        evento.Average = avg[0];
                        //evento.Average=itemCopy6[0].avg;
                        //console.log(itemCopy6[0].avg)
                        this.projectService.getNameProject(this.Form.value.IdProyecto).subscribe((res4) => {
                            const itemCopy7 = Object.assign({}, res4);
                            proyecto.id = this.Form.value.IdProyecto;
                            proyecto.name = itemCopy7[0].name;
                            //console.log(itemCopy7.project.name)
                            evento.Proyecto = proyecto;
                            categoria.id = 0;
                            categoria.name = '----';
                            evento.Categoria = categoria;
                            ListaEventos.push(evento);
                            this.Lista = [];
                            this.Lista = ListaEventos;
                            //console.log('fin')
                        });
                    });
                }
                else {
                    if (this.Form.value.IdCategoria == 0) { //si
                        //console.log('Entro por categoria ==0');
                        this.eventoService.getAverages1ProyectoTodasCategorias(this.Form.value.IdProyecto).subscribe((res6) => {
                            const itemCopy10 = Object.assign({}, res6);
                            let ListaEventos = [];
                            let milength2 = Object.keys(itemCopy10).length;
                            for (let ij = 0; ij < milength2; ij++) {
                                this.projectService.getNameProject(this.Form.value.IdProyecto).subscribe((res4) => {
                                    let proyecto = {};
                                    let categoria = {};
                                    let evento = {};
                                    categoria.name = itemCopy10[ij].name;
                                    categoria.id = 0;
                                    evento.Categoria = categoria;
                                    var avg = itemCopy10[ij].avg.substr(0, 19).split(".");
                                    evento.Average = avg[0];
                                    //evento.Average=itemCopy10[ij].avg;
                                    const itemCopy7 = Object.assign({}, res4);
                                    proyecto.id = this.Form.value.IdProyecto;
                                    proyecto.name = itemCopy7[0].name;
                                    ;
                                    evento.Proyecto = proyecto;
                                    ListaEventos.push(evento);
                                });
                            }
                            this.Lista = ListaEventos;
                        });
                    }
                    else { //no
                        //console.log('entro por categoria!=0');
                        let ListaEventos = [];
                        this.eventoService.getAverages1Proyecto1Categoria(this.Form.value.IdCategoria).subscribe((res50) => {
                            const itemCopy50 = Object.assign({}, res50);
                            this.categoriaService.getCategoriaInfo(this.Form.value.IdCategoria).subscribe((res60) => {
                                const itemCopy60 = Object.assign({}, res60);
                                this.projectService.getNameProject(this.Form.value.IdProyecto).subscribe((res4) => {
                                    const itemCopy7 = Object.assign({}, res4);
                                    let evento = {};
                                    let proyecto = {};
                                    let categoria = {};
                                    var avg = itemCopy50[0].avg.substr(0, 19).split(".");
                                    evento.Average = avg[0];
                                    //evento.Average=itemCopy50[0].avg;
                                    proyecto.id = this.Form.value.IdProyecto;
                                    proyecto.name = itemCopy7[0].name;
                                    ;
                                    evento.Proyecto = proyecto;
                                    categoria.id = itemCopy60[0].id;
                                    categoria.name = itemCopy60[0].name;
                                    categoria.project_id = itemCopy60[0].project_id;
                                    evento.Categoria = categoria;
                                    ListaEventos.push(evento);
                                });
                            });
                            this.Lista = [];
                            this.Lista = ListaEventos;
                        });
                    }
                }
            }
        }
        if (this.Form.value.ChResolved == true) {
            this.statusesDeIssueService.get().subscribe((res) => {
                const itemCopy = Object.assign({}, res);
                //let issue_status: Issue_status;
                let issue_status = {};
                //issue_status.name='';
                let milenght = Object.keys(itemCopy.issue_statuses).length;
                for (let i = 0; i < milenght; i++) {
                    if (itemCopy.issue_statuses[i].name == 'Resolved' && itemCopy.issue_statuses[i].is_closed == true) {
                        //console.log(itemCopy.issue_statuses[i]);
                        //console.log(itemCopy.issue_statuses[i].id);
                        //console.log(itemCopy.issue_statuses[i].name);
                        issue_status.id = itemCopy.issue_statuses[i].id;
                        issue_status.name = itemCopy.issue_statuses[i].name;
                        issue_status.is_closed = itemCopy.issue_statuses[i].is_closed;
                        //console.log(itemCopy.issue_statuses[i].is_closed);
                        /** issue_status.id=itemCopy.issue_statuses[i].id;
                         issue_status.name=itemCopy.issue_statuses[i].name;
                         issue_status.is_closed=itemCopy.issue_statuses[i].is_closed; */
                        //console.log(issue_status);
                        i = milenght;
                    }
                }
                if (this.Form.value.IdProyecto == 0) { //si
                    //console.log('entro a la opcion');
                    // this.projectService.get().subscribe((res: any)=>{
                    if (this.Form.value.IdCategoria === '') {
                        this.eventoService.getAveragesTodosProyectos0categoriaResolved(issue_status.id).subscribe((res) => {
                            const itemCopy4 = Object.assign({}, res);
                            let ListaEventos = [];
                            let milength = Object.keys(itemCopy4).length;
                            for (let i = 0; i < milength; i++) {
                                let evento = {};
                                let proyecto = {};
                                let categoria = {};
                                proyecto.id = itemCopy4[i].project_id;
                                var avg = itemCopy4[i].avg.substr(0, 19).split(".");
                                evento.Average = avg[0];
                                //evento.Average=itemCopy4[i].avg;
                                categoria.id = 0;
                                categoria.name = '----';
                                evento.Categoria = categoria; //cambiar a consulta a todos los proyectos 
                                this.projectService.getNameProject(itemCopy4[i].project_id).subscribe((res2) => {
                                    const itemCopy5 = Object.assign({}, res2);
                                    proyecto.name = itemCopy5[0].name;
                                });
                                evento.Proyecto = proyecto;
                                ListaEventos.push(evento);
                            }
                            this.Lista = ListaEventos;
                        });
                        return;
                    }
                    else {
                        //console.log('entro como categoria ALL-ALL');
                        this.Lista = [];
                        //let idProyecto=0
                        this.projectService.get().subscribe((res) => {
                            const itemCopy = Object.assign({}, res);
                            let ListaEventosx = [];
                            let milegnht = Object.keys(itemCopy).length;
                            for (let i = 0; i < milegnht; i++) {
                                //let miProject={} as Project;     
                                this.eventoService.getAverages1ProyectoTodasCategoriasResolved(itemCopy[i].id, issue_status.id).subscribe((res6x) => {
                                    const itemCopy10x = Object.assign({}, res6x);
                                    let milength2x = Object.keys(itemCopy10x).length;
                                    for (let i2 = 0; i2 < milength2x; i2++) {
                                        let proyecto = {};
                                        let categoria = {};
                                        let evento = {};
                                        proyecto.id = itemCopy[i].id;
                                        proyecto.name = itemCopy[i].name;
                                        categoria.name = itemCopy10x[i2].name;
                                        categoria.id = 0;
                                        evento.Proyecto = proyecto;
                                        evento.Categoria = categoria;
                                        var avg = itemCopy10x[i2].avg.substr(0, 19).split(".");
                                        evento.Average = avg[0];
                                        //evento.Average=itemCopy10x[i2].avg;
                                        ListaEventosx.push(evento);
                                    }
                                });
                            }
                            this.Lista = ListaEventosx;
                        });
                    }
                }
                else {
                    if (this.Form.value.IdCategoria === '') { //si
                        //console.log('entro por categoria=\'\'');
                        this.eventoService.getAverages1ProyectoResolved(this.Form.value.IdProyecto, issue_status.id).subscribe((res3) => {
                            //console.log(this.Form.value.IdProyecto);
                            const itemCopy6 = Object.assign({}, res3);
                            let ListaEventos = [];
                            let evento = {};
                            let proyecto = {};
                            let categoria = {};
                            var avg = itemCopy6[0].avg.substr(0, 19).split(".");
                            evento.Average = avg[0];
                            //evento.Average=itemCopy6[0].avg;
                            //console.log(itemCopy6[0].avg)
                            this.projectService.getNameProject(this.Form.value.IdProyecto).subscribe((res4) => {
                                const itemCopy7 = Object.assign({}, res4);
                                proyecto.id = this.Form.value.IdProyecto;
                                proyecto.name = itemCopy7[0].name;
                                //console.log(itemCopy7.project.name)
                                evento.Proyecto = proyecto;
                                categoria.id = 0;
                                categoria.name = '----';
                                evento.Categoria = categoria;
                                ListaEventos.push(evento);
                                this.Lista = [];
                                this.Lista = ListaEventos;
                                //console.log('fin')
                            });
                        });
                    }
                    else {
                        if (this.Form.value.IdCategoria == 0) { //si
                            //console.log('Entro por categoria ==0');
                            this.eventoService.getAverages1ProyectoTodasCategoriasResolved(this.Form.value.IdProyecto, issue_status.id).subscribe((res6) => {
                                const itemCopy10 = Object.assign({}, res6);
                                let ListaEventos = [];
                                let milength2 = Object.keys(itemCopy10).length;
                                for (let ij = 0; ij < milength2; ij++) {
                                    this.projectService.getNameProject(this.Form.value.IdProyecto).subscribe((res4) => {
                                        let proyecto = {};
                                        let categoria = {};
                                        let evento = {};
                                        categoria.name = itemCopy10[ij].name;
                                        categoria.id = 0;
                                        evento.Categoria = categoria;
                                        var avg = itemCopy10[ij].avg.substr(0, 19).split(".");
                                        evento.Average = avg[0];
                                        //evento.Average=itemCopy10[ij].avg;
                                        const itemCopy7 = Object.assign({}, res4);
                                        proyecto.id = this.Form.value.IdProyecto;
                                        proyecto.name = itemCopy7[0].name;
                                        ;
                                        evento.Proyecto = proyecto;
                                        ListaEventos.push(evento);
                                    });
                                }
                                this.Lista = ListaEventos;
                            });
                        }
                        else { //no
                            //console.log('entro por categoria!=0');
                            let ListaEventos = [];
                            this.eventoService.getAverages1Proyecto1CategoriaResolved(this.Form.value.IdCategoria, issue_status.id).subscribe((res50) => {
                                const itemCopy50 = Object.assign({}, res50);
                                this.categoriaService.getCategoriaInfo(this.Form.value.IdCategoria).subscribe((res60) => {
                                    const itemCopy60 = Object.assign({}, res60);
                                    this.projectService.getNameProject(this.Form.value.IdProyecto).subscribe((res4) => {
                                        const itemCopy7 = Object.assign({}, res4);
                                        let evento = {};
                                        let proyecto = {};
                                        let categoria = {};
                                        var avg = itemCopy50[0].avg.substr(0, 19).split(".");
                                        evento.Average = avg[0];
                                        //evento.Average=itemCopy50[0].avg;
                                        proyecto.id = this.Form.value.IdProyecto;
                                        proyecto.name = itemCopy7[0].name;
                                        ;
                                        evento.Proyecto = proyecto;
                                        categoria.id = itemCopy60[0].id;
                                        categoria.name = itemCopy60[0].name;
                                        categoria.project_id = itemCopy60[0].project_id;
                                        evento.Categoria = categoria;
                                        ListaEventos.push(evento);
                                    });
                                });
                                this.Lista = [];
                                this.Lista = ListaEventos;
                            });
                        }
                    }
                }
                //console.log(issue_status);
                //let EstadoResolved: any;
            });
        }
    }
    CargarCategorias() {
        this.OpcionesCategoria = [];
        this.SinBusquedasRealizadas = false;
        if (this.Form.value.IdProyecto === '') {
            this.OpcionesCategoria = [];
            return;
        }
        else {
            if (this.Form.value.IdProyecto == 0) {
                let ListaCategorias = [];
                let categoria = {};
                categoria.id = 0;
                categoria.name = 'All Categories';
                ListaCategorias.push(categoria);
                this.OpcionesCategoria = ListaCategorias;
            }
            else {
                this.categoriaService.getById(this.Form.value.IdProyecto).subscribe((res) => {
                    const itemCopy2 = Object.assign({}, res);
                    let ListaCategorias = [];
                    let largor = Object.keys(itemCopy2).length;
                    if (largor == 0) {
                        this.SinBusquedasRealizadas = true;
                        return;
                    }
                    for (let i = 0; i < largor; i++) {
                        let categoria = {};
                        categoria.id = itemCopy2[i].id;
                        categoria.project_id = this.Form.value.IdProyecto;
                        categoria.name = itemCopy2[i].name;
                        ListaCategorias.push(categoria);
                    }
                    let categoria = {};
                    categoria.id = 0;
                    categoria.name = 'All Categories';
                    ListaCategorias.push(categoria);
                    this.OpcionesCategoria = ListaCategorias;
                });
            }
        }
    }
    GetProyectos() {
        let idProyecto = 0;
        this.projectService.get().subscribe((res) => {
            const itemCopy = Object.assign({}, res);
            let ListaProyectos = [];
            let milegnht = Object.keys(itemCopy).length;
            for (let i = 0; i < milegnht; i++) {
                let miProject = {};
                miProject.id = itemCopy[i].id; //itemCopy4[i].project_id;
                miProject.name = itemCopy[i].name;
                miProject.identifier = itemCopy[i].identifier;
                miProject.description = itemCopy[i].description;
                miProject.status = itemCopy[i].status;
                miProject.is_public = itemCopy[i].is_public;
                miProject.created_on = itemCopy[i].created_on;
                miProject.updated_on = itemCopy[i].updated_on;
                ListaProyectos.push(miProject);
            }
            let miProject = {};
            miProject.id = 0;
            miProject.name = 'All projects';
            ListaProyectos.push(miProject);
            this.OpcionesProyectos = ListaProyectos;
        });
    }
}
AverageComponent.ɵfac = function AverageComponent_Factory(t) { return new (t || AverageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicios_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicios_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicios_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Servicios_statuses_de_issue_service__WEBPACK_IMPORTED_MODULE_5__["StatusesDeIssueService"])); };
AverageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AverageComponent, selectors: [["app-average"]], decls: 43, vars: 14, consts: [[1, "container"], ["name", "Form", 3, "formGroup"], [1, "form-group", "row"], ["for", "IdProyecto", 1, "col-form-label", "col-sm-2", "col-sm-offset-2"], [1, "text-danger"], [1, "col-sm-6"], ["name", "IdProyecto", "formControlName", "IdProyecto", 1, "form-control", 3, "ngClass", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "col", "p-4"], ["name", "ChResolved", "formControlName", "ChResolved", "type", "checkbox", "name", "ChResolved", "id", "ChResolved", 1, "form-check-input", 3, "value"], ["for", "ChResolved", 1, "form-check-label", "text-success"], ["for", "IdCategoria", 1, "col-form-label", "col-sm-2", "col-sm-offset-2"], ["name", "IdCategoria", "formControlName", "IdCategoria", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "col-6", 3, "click"], [1, "fas", "fa-search"], [1, "container", "w-50", "text-center"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "divTablaResultados", 4, "ngIf"], [3, "ngValue"], ["id", "divTablaResultados"], [1, "table", "table-bordered", "table-striped"], [1, "text-center"], [4, "ngFor", "ngForOf"]], template: function AverageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Averages times ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AverageComponent_Template_select_change_12_listener() { return ctx.CargarCategorias(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AverageComponent_option_13_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AverageComponent_span_15_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Only resolved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AverageComponent_option_28_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AverageComponent_span_30_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AverageComponent_Template_button_click_32_listener() { return ctx.Calcular(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Calculate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AverageComponent_div_41_Template, 12, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Accion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (ctx.Form.controls.IdProyecto.touched || ctx.submitted) && ctx.Form.controls.IdProyecto.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.OpcionesProyectos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.Form.controls.IdProyecto.touched || ctx.submitted) && (ctx.Form.controls.IdProyecto.errors == null ? null : ctx.Form.controls.IdProyecto.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, (ctx.Form.controls.IdCategoria.touched || ctx.submitted) && ctx.Form.controls.IdCategoria.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.OpcionesCategoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.Form.controls.IdCategoria.touched || ctx.submitted) && (ctx.Form.controls.IdCategoria.errors == null ? null : ctx.Form.controls.IdCategoria.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.Lista == null ? null : ctx.Lista.length) > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmVyYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AverageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-average',
                templateUrl: './average.component.html',
                styleUrls: ['./average.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_Servicios_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }, { type: src_app_Servicios_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"] }, { type: src_app_Servicios_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"] }, { type: src_app_Servicios_statuses_de_issue_service__WEBPACK_IMPORTED_MODULE_5__["StatusesDeIssueService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
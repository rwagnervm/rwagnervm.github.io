import{m as d}from"./TimeOnly.5d28261e.js";import{a as F,B as f,U as m,G as h,Q as l,b as w,r as S,ay as u,P as c,W as v}from"./arcadeUtils.154760f4.js";import{O as g,a as T}from"./WhereClause.b007a323.js";import"./index.7eb0daf2.js";import"./UnknownTimeZone.4756be49.js";import"./ImmutableArray.28227007.js";import"./number.fad7db53.js";import"./featureConversionUtils.c6dfa488.js";import"./OptimizedFeature.32c00f5f.js";import"./OptimizedFeatureSet.6fd3bcb1.js";import"./FieldsIndex.333d0734.js";async function s(n,a,t,i){if(t.length===1){if(m(t[0]))return u(n,t[0],c(t[1],-1));if(l(t[0]))return u(n,t[0].toArray(),c(t[1],-1))}else if(t.length===2){if(m(t[0]))return u(n,t[0],c(t[1],-1));if(l(t[0]))return u(n,t[0].toArray(),c(t[1],-1));if(f(t[0])){const e=await t[0].load(),r=await p(g.create(t[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),i,a);return y(a,await t[0].calculateStatistic(n,r,c(t[2],1e3),a.abortSignal))}}else if(t.length===3&&f(t[0])){const e=await t[0].load(),r=await p(g.create(t[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),i,a);return y(a,await t[0].calculateStatistic(n,r,c(t[2],1e3),a.abortSignal))}return u(n,t,-1)}function y(n,a){return a instanceof T?d.fromReaderAsTimeStampOffset(a.toStorageFormat()):a instanceof Date?d.dateJSAndZoneToArcadeDate(a,v(n)):a}async function p(n,a,t){const i=n.getVariables();if(i.length>0){const e=[];for(let o=0;o<i.length;o++){const A={name:i[o]};e.push(await a.evaluateIdentifier(t,A))}const r={};for(let o=0;o<i.length;o++)r[i[o]]=e[o];return n.parameters=r,n}return n}function G(n){n.mode==="async"&&(n.functions.stdev=function(a,t){return n.standardFunctionAsync(a,t,(i,e,r)=>s("stdev",a,r,n))},n.functions.variance=function(a,t){return n.standardFunctionAsync(a,t,(i,e,r)=>s("variance",a,r,n))},n.functions.average=function(a,t){return n.standardFunctionAsync(a,t,(i,e,r)=>s("mean",a,r,n))},n.functions.mean=function(a,t){return n.standardFunctionAsync(a,t,(i,e,r)=>s("mean",a,r,n))},n.functions.sum=function(a,t){return n.standardFunctionAsync(a,t,(i,e,r)=>s("sum",a,r,n))},n.functions.min=function(a,t){return n.standardFunctionAsync(a,t,(i,e,r)=>s("min",a,r,n))},n.functions.max=function(a,t){return n.standardFunctionAsync(a,t,(i,e,r)=>s("max",a,r,n))},n.functions.count=function(a,t){return n.standardFunctionAsync(a,t,async(i,e,r)=>{if(F(r,1,1,a,t),f(r[0]))return r[0].count(i.abortSignal);if(m(r[0])||h(r[0]))return r[0].length;if(l(r[0]))return r[0].length();throw new w(a,S.InvalidParameter,t)})})}export{G as registerFunctions};
'use client';
import React, { useState } from 'react';
import {
Search, Mic, Navigation, Layers, Compass, Plus, Minus,
Settings2, MapPin, Users, ShieldAlert, Award
} from 'lucide-react';
const mockLocations = [
{ id: 1, name: "Пригородный посёлок «Заречье»", type: "посёлок", slavs: "94%", pensioners: "42%", rating: 9.8, coords: "Юго-Восток" },
{ id: 2, name: "Славянский микрорайон", type: "район", slavs: "91%", pensioners: "24%", rating: 9.5, coords: "Центр" },
{ id: 3, name: "Октябрьский район", type: "район", slavs: "81%", pensioners: "31%", rating: 8.7, coords: "Север" },
{ id: 4, name: "Деревня Фёдоровка", type: "деревня", slavs: "68%", pensioners: "56%", rating: 7.4, coords: "Запад" },
];
export default function Home() {
const [activeTab, setActiveTab] = useState('map');
const [selectedPlace, setSelectedPlace] = useState(null);
const [showRatingSheet, setShowRatingSheet] = useState(false);
const [filterType, setFilterType] = useState('combined');
const getSortedLocations = () => {
return [...mockLocations].sort((a, b) => {
if (filterType === 'slavs') return parseInt(b.slavs) - parseInt(a.slavs);
if (filterType === 'pensioners') return parseInt(b.pensioners) - parseInt(a.pensioners);
return b.rating - a.rating;
});
};
return (
{mockLocations.map((loc, i) => (
<div
key={loc.id}
onClick={() => setSelectedPlace(loc)}
className={absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 p-2 bg-[#12141c] border-2 ${selectedPlace?.id === loc.id ? 'border-cyan-400 text-cyan-400' : 'border-zinc-700 text-zinc-400'} rounded-none font-bold text-xs flex items-center gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-0.5 active:translate-y-0.5 transition-all}
style={{ top: ${25 + i * 15}%, left: ${30 + i * 12}% }}
>

{loc.name.split(' ')}

))}
Брутальный Движок Картографии v1.0

{selectedPlace && (



{selectedPlace.type}
{selectedPlace.name}

<button
onClick={() => setSelectedPlace(null)}
className="text-zinc-500 border border-zinc-800 hover:text-white px-2 py-1 text-xs font-bold bg-zinc-900 active:bg-zinc-800"
>
✕

Славяне

{selectedPlace.slavs}




Пенсионеры

{selectedPlace.pensioners}

В путь ({selectedPlace.coords})


)}
<button
onClick={() => { setActiveTab('map'); setShowRatingSheet(false); }}
className={flex flex-col items-center gap-1.5 transition-all ${activeTab === 'map' ? 'text-cyan-400 font-black' : 'text-zinc-500 hover:text-zinc-400'}}
>

Карта
<button
onClick={() => { setActiveTab('options'); setShowRatingSheet(true); }}
className={flex flex-col items-center gap-1.5 transition-all ${activeTab === 'options' ? 'text-amber-400 font-black' : 'text-zinc-500 hover:text-zinc-400'}}
>

Опции
{showRatingSheet && (

<div
className="w-full flex justify-center py-3 bg-[#0d0e14] border-b border-zinc-800 cursor-pointer active:bg-zinc-900"
onClick={() => { setShowRatingSheet(false); setActiveTab('map'); }}
>

Закрыть меню

 Демографический ценз

Рейтинг населенных пунктов по фильтрам ТЗ

<button
onClick={() => setFilterType('combined')}
className={py-3 border-r border-zinc-800 transition-all ${filterType === 'combined' ? 'bg-amber-500 text-black font-black' : 'text-zinc-400'}}
>
Комбо Топ

<button
onClick={() => setFilterType('slavs')}
className={py-3 border-r border-zinc-800 transition-all ${filterType === 'slavs' ? 'bg-cyan-500 text-black font-black' : 'text-zinc-400'}}
>
Славяне %

<button
onClick={() => setFilterType('pensioners')}
className={py-3 transition-all ${filterType === 'pensioners' ? 'bg-amber-500 text-black font-black' : 'text-zinc-400'}}
>
Старшее поколение

{getSortedLocations().map((loc, index) => (
<div
key={loc.id}
className="bg-[#12141c] border-2 border-zinc-800 p-3.5 flex items-center justify-between active:border-cyan-400 transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
onClick={() => {
setSelectedPlace(loc);
setShowRatingSheet(false);
setActiveTab('map');
}}
>

#{index + 1}

{loc.name}

Славяне: {loc.slavs} | Pensioners: {loc.pensioners}




{loc.rating}


))}
)}
);
}
/**
 * App Calendar Events
 */

'use strict';

let date = new Date();
let nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
// prettier-ignore
let nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1);
// prettier-ignore
let prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1);

window.events = [
  {
    id: 1,
    url: '',
    title: 'Teste irrigação',
    start: date,
    end: nextDay,
    allDay: false,
    extendedProps: {
      calendar: 'Irrigação'
    }
  },
  {
    id: 2,
    url: '',
    title: 'Fazenda São Pedro',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Irrigação'
    }
  },
  {
    id: 3,
    url: '',
    title: 'Hortaliças',
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
    extendedProps: {
      calendar: 'Superfície'
    }
  },
  {
    id: 4,
    url: '',
    title: "Plantas e flores",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    extendedProps: {
      calendar: 'Superfície'
    }
  },
  {
    id: 5,
    url: '',
    title: 'Nova irrigação?',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Irrigação'
    }
  },
  {
    id: 6,
    url: '',
    title: 'Plantio',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Aspersão'
    }
  },
  {
    id: 7,
    url: '',
    title: 'Horta Central',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    extendedProps: {
      calendar: 'Localizada'
    }
  },
  {
    id: 8,
    url: '',
    title: 'Plantio Batata',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Subirrigação'
    }
  },
  {
    id: 9,
    url: '',
    title: 'Flores Jardim',
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Aspersão'
    }
  },
  {
    id: 10,
    url: '',
    title: 'Plantas Ornamentais',
    start: prevMonth,
    end: prevMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Aspersão'
    }
  }
];

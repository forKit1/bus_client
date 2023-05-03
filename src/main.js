import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);
  app.provide('globalStore', {
    accesBearertoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNGM5YWZkYy1kYzEzLTQ3MDktODIxYi0zYmZjMjkzMmRkYWIiLCJuYW1lIjoidXNlciB1c2VyIHVzZXIiLCJnaXZlbl9uYW1lIjoidXNlciIsImZhbWlseV9uYW1lIjoidXNlciIsIm1pZGRsZV9uYW1lIjoidXNlciIsImdlbmRlciI6IlVuZGVmaW5lZCIsImJpcnRoZGF0ZSI6IlVuZGVmaW5lZCIsImVtYWlsIjoiYWRtaW5AYXV0b2J1cy5jb20iLCJlbWFpbF92ZXJpZmllZCI6IlRydWUiLCJleHAiOjE2ODMxNzI3MjMsInJvbGVzIjoiQWRtaW5pc3RyYXRvciIsImlzcyI6IkFwcGxpY2F0aW9uIFVSTCIsImF1ZCI6IkFwcGxpY2F0aW9uIFVSTCJ9.cKOmskGF_4fjtAJJXdqJXvyfpuTwC8cL5rTbMTfyYWQ'
  });
app.use(router).mount('#app');


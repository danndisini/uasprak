<template>
  <div class="meeting1">
    <h1>Semua Tugas</h1>

    <div class="task-container">
      <div class="task" v-for="(task, index) in tasks" :key="index">
        <a :href="task.url" target="_blank" rel="noopener noreferrer">{{ task.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          title: 'Tugas 1',
          url: 'https://tugas1-pbk-223510824.vercel.app'
        },
        {
          title: 'Tugas 2',
          url: 'https://danywahyusaputra-223510824.vercel.app'
        },
        {
          title: 'Tugas 3',
          url: 'https://dany-t3-223510824.vercel.app'
        },
        {
          title: 'Tugas 4',
          url: 'https://dany-t4-223510824.vercel.app'
        },
        {
          title: 'Tugas 5',
          url: 'https://dany-t5-223510824.vercel.app'
        },
        {
          title: 'Tugas 6',
          url: 'https:t6-rouge.vercel.app/'
        },
        {
          title: 'Tugas 7',
          url: 'https://dany-223510824-t7.vercel.app'
        }
      ]
    };
  }
};
</script>

<style scoped>
.meeting1 {
  text-align: center;
  margin-top: 50px;
}

.meeting1 h1 {
  font-size: 24px;
}

.task-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.task {
  background-color: #f0f0f0;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.task a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}
</style>

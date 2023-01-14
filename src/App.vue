<template>
  <div>
    <label for="media-links">Media links: </label>
    <input type="text" id="media-links" v-model="mediaLinks" />
    <br />
    <label for="project-idea">Project idea: </label>
    <input type="text" id="project-idea" v-model="projectIdea" />
    <br />
    <button @click="addToDatabase">Add Media and Task</button>
  </div>
</template>

<script>
import FirebaseDataService from "./services/FirebaseDataService"
export default {
  data() {
    return {
      mediaLinks: '',
      projectIdea: ''
    }
  },
  methods: {
    addToDatabase() {
       if(this.mediaLinks != ''){
         this.addNewMediaLinkToDatabase(this.mediaLinks);
         this.mediaLinks = '';
       }
       if(this.projectIdea != ''){
         this.addNewProjectIdeaToDatabase(this.projectIdea);
         this.projectIdea = '';
       }
    },
    addNewMediaLinkToDatabase(newLink){
      FirebaseDataService.addNewContentLink(newLink);
    },
    addNewProjectIdeaToDatabase(projectIdea) {
      FirebaseDataService.addNewProject(projectIdea);
    }
  }
}
</script>

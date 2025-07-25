import { ref } from "vue";

let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async() => {
      try{
        let response = await fetch("http://localhost:3000/posts");
        if(response.status === 404) {
          throw new Error("Not found URL")
        }
        let datas = await response.json()
        posts.value = datas
      } catch(err) {
        error.value = err.message
      }
    };
    return {posts, error, load};
}

export default getPosts;
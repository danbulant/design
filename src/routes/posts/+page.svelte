<script>
    import Posts from "./posts.svelte";

    export var data;
    var posts = data.posts;
    $: posts = data.posts;
    var notes = data.notes;
    $: notes = data.notes;
</script>

<Posts {posts} {notes} postsActive />

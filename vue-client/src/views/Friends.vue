<template>
    <div class="lessons">

        <v-toolbar >

            <v-toolbar-title class="d-flex">
                <v-icon left>mdi-folder-multiple</v-icon> Lessons
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn 
                small 
                depressed 
                text
                outlined
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>

        </v-toolbar>

        <v-divider></v-divider>

    </div>
</template>

<script>

export default {
    name: 'Lessons',


}
</script>
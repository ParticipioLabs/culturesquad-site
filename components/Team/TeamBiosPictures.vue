<template>
  <div 
    class="container p-4"
  >
    <div class="row">
      <div class="col-12">
        <h5 class="mb-5">{{ sectionTitle }}</h5>
      </div>
      <member-card
        v-for="member of members"
        :key="member.id"
        :member="member"/>
    </div>
  </div>
</template>

<script>
  import MemberCard from '../Team/MemberCard';

  export default {
    components: {
      MemberCard
    },
    props: {
      members: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      return {
        sectionTitle: 'Members'
      }
    },
  }
</script>

<style scoped>

</style>

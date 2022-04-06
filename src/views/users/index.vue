<template>
  <div class="users-page">
    <div class="create-user">
      <button class="btn btn-info" @click="$router.push('/create-new-user')">
        Create user
      </button>
    </div>

    <div class="users-wrapper">
      <div class="user-card" v-for="user in allUsers" :key="user.id">
        <p>Name: {{ user.name }}</p>
        <p>Comment: {{ user.comment }}</p>
        <div class="user-card__bottom">
          <button class="btn btn-danger" @click="removeUserHandle(user)">
            Delete
          </button>
          <button class="btn btn-info" @click="editUserHandle(user.id)">
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "UsersPage",
  async created() {
    await this.fetchUsers();
  },
  computed: {
    ...mapState("users", ["allUsers"]),
  },
  methods: {
    ...mapActions("users", ["fetchUsers", "removeUser"]),
    async removeUserHandle(user) {
      if (
        confirm(`Are you sure you want to delete this user (${user.name}) ?`)
      ) {
        await this.removeUser(user.id);
        await this.fetchUsers();
      }
    },
    editUserHandle(userId) {
      this.$router.push(`/users/${userId}`);
    },
  },
};
</script>
<style lang="scss">
.users {
  &-page {
    margin-top: 2rem;
  }
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
.create-user {
  padding-bottom: 2rem;
}
.user {
  &-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #33333326;
    padding: 1rem;
    border-radius: 0.3rem;
    box-shadow: rgb(50 134 255 / 24%) 0px 4px 6px -1px,
      rgb(255 255 255 / 0%) 0px 2px 4px -1px;
  }
  &-card__bottom {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>

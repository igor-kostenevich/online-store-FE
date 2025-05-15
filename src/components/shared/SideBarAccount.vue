<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <div class="font-medium">Manage My Account</div>
      <div class="ml-8 text-text-gray flex flex-col gap-1 pt-4">
        <router-link
          to="/account/profile"
          class="hover:text-secondary-red transition"
        >
          My Profile
        </router-link>
        <router-link
          to="/account/address"
          class="hover:text-secondary-red transition"
        >
          Address Book
        </router-link>
        <router-link
          to="/account/payment"
          class="hover:text-secondary-red transition"
        >
          My Payment Options
        </router-link>
      </div>
    </div>
    <div class="pt-6">
      <div class="font-medium">My Orders</div>
      <div class="ml-8 text-text-gray flex flex-col gap-1 pt-4">
        <router-link
          to="/account/returns"
          class="hover:text-secondary-red transition"
        >
          My Returns
        </router-link>
        <router-link
          to="/account/collections"
          class="hover:text-secondary-red transition"
        >
          My Cancellations
        </router-link>
      </div>
    </div>
    <div class="pt-6">
      <div class="font-medium">My WishList</div>
      <div class="ml-8 text-text-gray flex flex-col gap-1 pt-4" />
    </div>
  </div>
</template>

<style scoped></style>

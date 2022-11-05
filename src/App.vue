

<template>

  <a-layout style="min-height: 100vh;">

    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-row :gutter="32">

        <a-col  :span="12">

          <a-row :gutter="[16,16]">
            <a-col :span="32" >
              <h2>Selected items</h2>
            </a-col>
          </a-row>
          <div style="height: 20px;"></div>
          <a-row :gutter="[16,16]">
            <a-col :span="8" v-for="item in $store.state.userItems" @click="clickUserItem(item)">
              <a-card  :title="item.id" :bordered="true">
                <p>{{ item.name }}</p>
              </a-card>
            </a-col>
          </a-row>
          <div style="height: 20px;"></div>
          <a-row :gutter="[16,16]">
            <a-col :span="32" >
              <b>Selected: {{$store.state.userItems.length}}/6</b>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row :gutter="[16,16]">
            <a-col :span="32" >
              <h2>Item</h2>
            </a-col>
          </a-row>
          <div style="height: 20px;"></div>
          <a-card v-if="$store.state.selectedItem"  :title="$store.state.selectedItem.id" :bordered="true">
            <p>{{ $store.state.selectedItem.name }}</p>
          </a-card>
        </a-col>
      </a-row>
      <div style="height: 40px;"></div>
      <a-row :gutter="32">
        <a-col :span="12">
          <h2>User Items</h2>
        </a-col>
        <a-col :span="12">
          <h2>Item to select</h2>
        </a-col>
        <a-col :span="12">
          <a-row :gutter="[16,16]">
            <a-col :span="6" v-for="item in userItems" @click="clickUserItem(item)">
              <a-card  :title="userItemFormatted.indexOf(item.id) == -1 ? item.id : 'Selected'" :bordered="true">
                <p>{{ item.name }}</p>
              </a-card>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row :gutter="[16,16]">
            <a-col :span="6" v-for="item in toSelectItems" @click="clickSelectedItem(item)">
              <a-card  :title="(this.$store.state.selectedItem && this.$store.state.selectedItem.id == item.id) ? 'Selected' : item.id" :bordered="true">
                <p>{{ item.name }}</p>
              </a-card>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>



</template>

<script>
  export default {
    data: () => {
      return {
        userItems: [
          {
            "id": 1,
            "name": "Shoes 1"
          },
          {
            "id": 2,
            "name": "Shoes 2"
          },
          {
            "id": 3,
            "name": "Shoes 3"
          },
          {
            "id": 4,
            "name": "Shoes 4"
          },
          {
            "id": 5,
            "name": "T-shirt 1"
          },
          {
            "id": 6,
            "name": "T-shirt 2"
          },
          {
            "id": 7,
            "name": "T-shirt 3"
          },
          {
            "id": 8,
            "name": "T-shirt 4"
          }
        ],
        toSelectItems: [
          {
            "id": 11,
            "name": "Jacket 1"
          },
          {
            "id": 12,
            "name": "Jacket 2"
          },
          {
            "id": 13,
            "name": "Jacket 3"
          },
          {
            "id": 14,
            "name": "Jacket 4"
          },
          {
            "id": 15,
            "name": "Hoodie 1"
          },
          {
            "id": 16,
            "name": "Hoodie 2"
          },
          {
            "id": 17,
            "name": "Hoodie 3"
          },
          {
            "id": 18,
            "name": "Hoodie 4"
          }
        ]
      }
    },
    computed: {
      userItemFormatted() {
        return this.$store.state.userItems.map(item => item.id)
      }
    },
    methods: {
      clickUserItem(item) {
        if(this.$store.state.userItems.findIndex(userItem => userItem.id == item.id) === -1){
          if(this.$store.state.userItems.length < 6){
            this.$store.commit('addToUserItem', item)
          }
        } else {
            this.$store.commit('removeUserItem', item.id)
        }
      },
      clickSelectedItem(item) {
        if(this.$store.state.selectedItem && this.$store.state.selectedItem.id === item.id ){
          this.$store.commit('setSelectedItem', null)
        } else {
          this.$store.commit('setSelectedItem', item)
        }
      }
    }
  }
</script>

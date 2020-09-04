<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <pasadu-detail :pasadu="pasadu"></pasadu-detail>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import PasaduDetail from "@/components/widgets/form/PasaduDetail";
import { APIPath } from "@/backend/APIPath";
const apiPath = new APIPath();
import axios from "axios";
export default {
  layout: "dashboard",
  components: {
    VWidget,

    PasaduDetail
  },
  data() {
    return {
      pasadu: [
        {
          pasaduid: "",
          noid: "",
          name: "",
          modem: "",
          serialno: "",
          company: "",
          type: "",
          place: "",
          receive: "",
          perunit: "",
          kmoney: "",
          tmoney: "",
          engname: "",
          status: "",
          type_group: ""
        }
      ]
    };
  },
  mounted() {
    this.fetch_pasadu();
  },
  methods: {
    //แสดง ข้อมูลจาก ตาราง pasadu
    async fetch_pasadu() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_detail.php`, {
          params: {
            pasaduid: this.$route.params.pid
          }
        })
        .then(response => {
          this.pasadu = response.data;
        });
    }
  }
};
</script>

import liff from "@line/liff"
import { mapActions, mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      isLoading: "root/getLoading",
    }),
  },
  methods: {
    ...mapActions({
      loadingStart: "root/loadingStart",
      loadingStop: "root/loadingStop",
    }),
    ...mapMutationsO({
      setUser: "lineAuth/SET_USER",
    }),
    async liffInit({ liffId }) {
      if (false) return

      this.loadingStart()
      await liff.init({
        liffId,
      })

      // if (!liff.isInClient()) {
      //   window.location.href = "https://www.ghbank.co.th/";
      // }

      if (liff.isLoggedIn()) {
        const profile = await liff.getProfile().catch((err) => console.error(err))

        await this.setUser({
          uid: profile.userId,
          displayName: profile.displayName,
          pictureUrl: profile.pictureUrl,
          email: liff.getDecodedIDToken().email,
        })
      } else {
        liff.login()
      }
      // await this.LineLiffInit(data)
      this.loadingStop()
    },
  },
}

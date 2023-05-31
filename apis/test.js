import {
  INTERFACE_URL
} from "../libs/interface"
import {
  Get,
  Post
} from "../utils/request"

export const testApi = () => {
  return Post(INTERFACE_URL.testApi, {
    id: 21
  }, {
    iddad: 21
  })
}
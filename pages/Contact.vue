
<template>
  <div class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover
        lg:absolute lg:h-full"
             src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
             alt=""/>
      </div>
    </div>
    <div class="relative py-16 px-4 sm:py-24 sm:px-6
    lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div class="lg:pr-8">
        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Let's work together</h2>
          <p class="mt-4 text-lg text-gray-500 sm:mt-3">We’d love to hear from you! Send us a message using the form
            opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email
            us.</p>
          <Toax`st v-if="toast.show" @close="toast.show = false" :title="toast.title" :description="toast.description" :theme="toast.type" />
          <form @submit.prevent="sendMail" class="mt-9
           grid grid-cols-1 gap-y-6 sm:grid-cols-2
           sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm
              font-medium text-gray-700">First name</label>
              <div class="mt-1">
                <input type="text" name="f_name" v-model="f_name"
                       id="first-name" autocomplete="given-name"
                       class="block border w-full shadow-sm sm:text-sm
                       focus:ring-grape-500 focus:border-grape-500
                        border-gray-300 rounded-md" required/>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm
              font-medium text-gray-700">Last name</label>
              <div class="mt-1">
                <input type="text" name="l_name"  id="last-name" v-model="l_name"
                       autocomplete="family-name" class="block border w-full
                        shadow-sm sm:text-sm focus:ring-grape-500
                        focus:border-grape-500 border-gray-300 rounded-md" required/>
              </div>
            </div>


            <div class="sm:col-span-2">
              <label for="email" class="block text-sm
               font-medium text-gray-700">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" v-model="email"
                       autocomplete="email" class="block w-full
                       shadow-sm sm:text-sm focus:ring-grape-500 border
                        focus:border-grape-500 border-gray-300 rounded-md" required/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="phone" class="block text-sm
                font-medium text-gray-700">Phone</label>
                <span id="phone-description" class="text-sm
                 text-gray-500">Optional</span>
              </div>
              <div class="mt-1">
                <input type="text" name="phone" id="phone" required v-model="phone"
                       autocomplete="tel" aria-describedby="phone-description"
                       class="block border w-full shadow-sm sm:text-sm
                       focus:ring-gray-500 focus:border-grape-500
                       border-gray-500 rounded-md"/>
              </div>
            </div>


            <!--            <div class="sm:col-span-2">
                          <label for="company" class="block text-sm font-medium
                           text-gray-700">Company</label>
                          <div class="mt-1">
                            <input type="text" name="company" id="company"
                                   autocomplete="organization" class="block border  w-full
                                   shadow-sm sm:text-sm focus:ring-grape-500
                                    focus:border-grape-500 rounded-md" />
                          </div>
                        </div>-->

            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="how-can-we-help" class="block
                text-sm font-medium
                text-gray-700">Message</label>
                <span id="how-can-we-help-description"
                      class="text-sm text-gray-500">Max. 500 characters</span>
              </div>
              <div class="mt-1">
                <textarea id="how-can-we-help"
                          name="message" v-model="message"
                          aria-describedby="how-can-we-help-description"
                          rows="4" class="block w-full border shadow-sm sm:text-sm
                          focus:ring-grape-500 focus:border-grape-500 border
                          border-gray-300 rounded-md" required/>
              </div>
            </div>
            <!--            <fieldset class="sm:col-span-2">
                          <legend class="block text-sm font-medium text-gray-700">Expected budget</legend>
                          <div class="mt-4 grid grid-cols-1 gap-y-4">
                            <div class="flex items-center">
                              <input id="budget-under-25k" name="budget" value="under_25k" type="radio" class="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300" />
                              <label for="budget-under-25k" class="ml-3">
                                <span class="block text-sm text-gray-700">Less than $25K</span>
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input id="budget-25k-50k" name="budget" value="25k-50k" type="radio" class="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300" />
                              <label for="budget-25k-50k" class="ml-3">
                                <span class="block text-sm text-gray-700">$25K – $50K</span>
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input id="budget-50k-100k" name="budget" value="50k-100k" type="radio" class="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300" />
                              <label for="budget-50k-100k" class="ml-3">
                                <span class="block text-sm text-gray-700">$50K – $100K</span>
                              </label>
                            </div>
                            <div class="flex items-center">
                              <input id="budget-over-100k" name="budget" value="over_100k" type="radio" class="focus:ring-grape-500 h-4 w-4 text-grape-600 border-gray-300" />
                              <label for="budget-over-100k" class="ml-3">
                                <span class="block text-sm text-gray-700">$100K+</span>
                              </label>
                            </div>
                          </div>
                        </fieldset>-->
            <!--            <div class="sm:col-span-2">
                          <label for="how-did-you-hear-about-us" class="block
                          text-sm font-medium
                           text-gray-700">How did you hear about us?</label>
                          <div class="mt-1">
                            <input type="text" name="how-did-you-hear-about-us"
                                   id="how-did-you-hear-about-us" class="shadow-sm
                                   focus:ring-grape-500 border focus:border-grape-500 block
                                    w-full sm:text-sm border-gray-300 rounded-md" />
                          </div>
                        </div>-->
            <div class="text-right sm:col-span-2 flex items-center space-x-2">
              <button type="reset" class="inline-flex justify-center
              py-2 px-4 border border-slate-500 shadow-sm text-sm
              font-medium rounded-md text-slate-600 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-grape-500">Cancel
              </button>
              <button type="submit" value="Send" class="inline-flex justify-center
              py-2 px-4 border border-transparent shadow-sm text-sm
              font-medium rounded-md text-white bg-indigo-600
              hover:bg-grape-700 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-grape-500">Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import emailJs from 'emailjs-com';
import {ref} from 'vue';
import Toast from "~/components/Toast.vue";

const Mailer = emailJs
Mailer.init("454WVnzKaYzokYZ3g");
export default {
  name: 'ContactUs',
  components: {Toast},

  setup() {
    //toast data

    const toast = ref({
      title: '',
      description: '',
      type: '',
      show: false
    })

    //form
    const f_name = ref(' ')
    const l_name = ref('')
    const email = ref('')
    const phone = ref('')
    const message = ref('')
    let sending = ref(false)

    //reset form
    const resetForm = () => {
      f_name.value = ''
      l_name.value = ''
      email.value = ''
      phone.value = ''
      message.value = ''
    }

    //send meail
    /**/const sendMail = () => {
      Mailer.send("service_7jdyxxj", "template_3r16flj",{
        to_name: 'Michael',
        from_name:`${f_name.value} ${l_name.value}`,
        phone: phone.value,
        message: message.value,
        email: email.value,
        reply_to: email.value
      }).then((res)=>{
        console.log('Email sent successfully: ', res)
        if (res.text.toLowerCase() === 'ok'){
          toast.value.title = 'Message sent successfully!'
          toast.value.description = 'I\'ll be replying to your message shortly. Thank you for reaching out.'
          toast.value.type = 'success'
          toast.value.show = true

          setTimeout(() => {
            toast.value.show = false
          }, 20000)
        }
      }).catch((error) =>{
        console.log('Email failed: ', error)
        toast.value.title = 'Error!'
        toast.value.description = 'Am sorry! Something went wrong when sending your message. Please try again later'
        toast.value.type = 'danger'
        toast.value.show = true

        setTimeout(() => {
          toast.value.show = false
        }, 20000)
      }).finally(() => {
        sending.value = false
        resetForm()
      });



    }


    return {sendMail, sending, toast, f_name, l_name, email, phone, message}
    definePageMeta({
      layout: 'contact-layout'
    })
  }
}

</script>

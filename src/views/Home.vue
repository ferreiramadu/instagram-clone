<template>
  <div class="container">
    <div class="grid-box">
      <div class="image">
        <img src="../assets/images/cellphone.png" />
        <img class="gif" src="../assets/images/gif-instagram.gif" />
      </div>

      <div class="card">
        <div class="sub-card">
          <div class="div1">
            <img
              class="logo"
              src="../assets/images/logo_instagram.svg"
              alt="instagram"
            />
            <img
              class="profile"
              src="../assets/images/perfil_instagram.png"
              alt="logo instagram"
            />
          </div>
          <div class="div2">
            <button class="btn">Continuar como maahjx</button>
            <span class="span"
              >Não é maahjx? <a class="label">Trocar de conta</a></span
            >
          </div>
        </div>

        <div class="sub-card-2">
          <span
            ><a class="label">Trocar de conta</a> ou
            <a class="label">Cadastre-se</a></span
          >
        </div>

        <div class="get-app">
          <div>
            <span>Obtenha o aplicativo</span>
          </div>

          <img
            class="image-get"
            src="../assets/images/btn_apple.png"
            alt="baixar na apple store"
          />
          <img
            class="image-get"
            src="../assets/images/btn_google.png"
            alt="baixar na google play"
          />
        </div>
      </div>

      <div class="footer">
        <div class="row">
          <p class="footer-item">Sobre</p>
          <p class="footer-item">Blog</p>
          <p class="footer-item">Carreiras</p>
          <p class="footer-item">Ajuda</p>
          <p class="footer-item">API</p>
          <p class="footer-item">Privacidade</p>
          <p class="footer-item">Termos</p>
          <p class="footer-item">Contas mais relevantes</p>
          <p class="footer-item">Hastags</p>
          <p class="footer-item">Localizações</p>
        </div>

        <div class="row">
          <p class="footer-item">Beleza</p>
          <p class="footer-item">Dança e apresentação</p>
          <p class="footer-item">Fitness</p>
          <p class="footer-item">Comida e bebida</p>
          <p class="footer-item">Casa e jardim</p>
          <p class="footer-item">Musica</p>
          <p class="footer-item">Artes visuais</p>
        </div>

        <div class="footer-item">
          <div class="row">
            <div class="campo">
              <select class="select" id="senioridade">
                <option value="AF">Afrikaans</option>
                <option value="SQ">Albanian</option>
                <option value="AR">Arabic</option>
                <option value="HY">Armenian</option>
                <option value="EU">Basque</option>
                <option value="BN">Bengali</option>
                <option value="BG">Bulgarian</option>
                <option value="CA">Catalan</option>
                <option value="KM">Cambodian</option>
                <option value="ZH">Chinese (Mandarin)</option>
                <option value="HR">Croatian</option>
                <option value="CS">Czech</option>
                <option value="DA">Danish</option>
                <option value="NL">Dutch</option>
                <option value="EN">English</option>
                <option value="ET">Estonian</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finnish</option>
                <option value="FR">French</option>
                <option value="KA">Georgian</option>
                <option value="DE">German</option>
                <option value="EL">Greek</option>
                <option value="GU">Gujarati</option>
                <option value="HE">Hebrew</option>
                <option value="HI">Hindi</option>
                <option value="HU">Hungarian</option>
                <option value="IS">Icelandic</option>
                <option value="ID">Indonesian</option>
                <option value="GA">Irish</option>
                <option value="IT">Italian</option>
                <option value="JA">Japanese</option>
                <option value="JW">Javanese</option>
                <option value="KO">Korean</option>
                <option value="LA">Latin</option>
                <option value="LV">Latvian</option>
                <option value="LT">Lithuanian</option>
                <option value="MK">Macedonian</option>
                <option value="MS">Malay</option>
                <option value="ML">Malayalam</option>
                <option value="MT">Maltese</option>
                <option value="MI">Maori</option>
                <option value="MR">Marathi</option>
                <option value="MN">Mongolian</option>
                <option value="NE">Nepali</option>
                <option value="NO">Norwegian</option>
                <option value="FA">Persian</option>
                <option value="PL">Polish</option>
                <option value="PT">Portuguese</option>
                <option value="PA">Punjabi</option>
                <option value="QU">Quechua</option>
                <option value="RO">Romanian</option>
                <option value="RU">Russian</option>
                <option value="SM">Samoan</option>
                <option value="SR">Serbian</option>
                <option value="SK">Slovak</option>
                <option value="SL">Slovenian</option>
                <option value="ES">Spanish</option>
                <option value="SW">Swahili</option>
                <option value="SV">Swedish</option>
                <option value="TA">Tamil</option>
                <option value="TT">Tatar</option>
                <option value="TE">Telugu</option>
                <option value="TH">Thai</option>
                <option value="BO">Tibetan</option>
                <option value="TO">Tonga</option>
                <option value="TR">Turkish</option>
                <option value="UK">Ukrainian</option>
                <option value="UR">Urdu</option>
                <option value="UZ">Uzbek</option>
                <option value="VI">Vietnamese</option>
                <option value="CY">Welsh</option>
                <option value="XH">Xhosa</option>
              </select>
            </div>
          </div>
          <p class="footer-item">© 2021 instagram do facebook</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style src="../assets/css/style.css" scoped></style>
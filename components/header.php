<header class="wow fadeInDown" data-wow-delay=".4s">
    <div class="header-container">
        <div class="logo">
            <a href="<?php echo $pageurl; ?>/">
                <img src="<?php echo $pageurl; ?>/public/images/logo.png" alt="">
            </a>
        </div>

        <div class="menu-desktop">
            <ul>
                <li>
                    <a href="<?php echo $pageurl; ?>/">Home</a>
                </li>

                <span></span>

                <li>
                    <a href="<?php echo $pageurl; ?>/sobre-a-lener">Sobre a Lener</a>
                </li>

                <span></span>

                <li>
                    <a href="#" class="button-buildings">Empreendimentos</a>
                </li>

                <span></span>

                <li>
                    <a href="<?php echo $pageurl; ?>/grupo-dinal">Grupo Dinal</a>
                </li>

                <span></span>

                <li>
                    <a href="#" class="button-contato">Contato</a>
                </li>
            </ul>
        </div>

        <div class="menu-mobile">
            <a href="#" class="open-menu">
                <svg viewBox="0 0 35 15" fill="none">
                    <rect width="35" height="3" fill="white"/>
                    <rect y="10" width="35" height="3" fill="white"/>
                    <rect y="20" width="35" height="3" fill="white"/>
                </svg>
            </a>
        </div>
    </div>
</header>

<?php include('components/menu.php'); ?>
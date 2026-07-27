// Core interactions + lightweight i18n (EN default, FR/ES optional)

document.addEventListener('DOMContentLoaded', () => {
    const SUPPORTED_LANGS = ['en', 'fr', 'es'];
    let currentLang = 'en';

    const UI_STRINGS = {
        en: {
            loadingVideo: 'Loading Video...',
            searchSoon: 'Search feature is coming soon.',
            responseCaptured: 'Query captured:'
        },
        fr: {
            loadingVideo: 'Chargement video...',
            searchSoon: 'La recherche arrive bientot.',
            responseCaptured: 'Requete capturee :'
        },
        es: {
            loadingVideo: 'Cargando video...',
            searchSoon: 'La busqueda estara disponible pronto.',
            responseCaptured: 'Consulta capturada:'
        }
    };

    const TRANSLATIONS = {
        fr: {
            meta: {
                'index.html': {
                    title: 'Inventory - Gestion intelligente des stocks dentaires',
                    description: 'Simplifiez la gestion des stocks de votre clinique dentaire avec suivi intelligent, commandes rapides et scanner instantane.'
                },
                'features.html': {
                    title: 'Fonctionnalites - Gestion intelligente des stocks dentaires'
                },
                'inventory.html': {
                    title: 'Detail inventaire - Gestion intelligente des stocks dentaires'
                },
                'order.html': {
                    title: 'Commande - Gestion intelligente des stocks dentaires'
                },
                'receiving.html': {
                    title: 'Reception - Gestion intelligente des stocks dentaires'
                },
                'scanner.html': {
                    title: 'Scanner - Gestion intelligente des stocks dentaires'
                },
                'settings.html': {
                    title: 'Parametres - Gestion intelligente des stocks dentaires'
                },
                'support.html': {
                    title: 'Support - Application Inventory',
                    description: 'Obtenez de l aide pour Inventory App - Contactez-nous et consultez les questions frequentes.'
                }
            },
            pages: {
                'index.html': [
                    { selector: '.badge', value: 'Version 2.0 disponible maintenant' },
                    { selector: '.hero h1', type: 'html', value: 'Gestion des stocks <br><span class="gradient-text">reinventee.</span>' },
                    { selector: '.hero-subtitle', value: 'Suivez votre inventaire dentaire avec des donnees en temps reel, un scanner intelligent et des alertes de stock faible, dans une experience fluide et securisee.' },
                    { selector: '.hero-actions .btn.btn-primary', value: 'Telecharger l app' },
                    { selector: '.trust-badges span', value: 'Adoptee par des cliniques de reference' },
                    { selector: '.mockup-header h2', value: 'Inventaire' },
                    { selector: '.mockup-search span', value: 'Rechercher des articles ou taper "low"...' },
                    { selector: '.mockup-tags .tag', all: true, values: ['Tous', '3M', '3M ESPE', 'Bausch'] },
                    { selector: '.section-header h2', all: true, values: ['Concu pour l efficacite.', 'Un flux de travail complet.'] },
                    { selector: '.section-header p', all: true, values: ['Cinq modules puissants pour piloter toute votre pratique.', 'Du controle de stock a la reception, chaque etape est couverte.'] },
                    { selector: '.feature-card h3', all: true, values: ['Inventaire', 'A commander', 'Scanner', 'Reception', 'Parametres'] },
                    { selector: '.feature-card p', all: true, values: ['Filtres intelligents, niveaux visuels et alertes critiques.', 'Commande en un geste et suivi des reliquats.', 'Lecture instantanee des codes et ajout rapide.', 'Reception des colis et verification des factures.', 'Roles utilisateurs, codes clinique et notifications.'] },
                    { selector: '.deep-dive-content h3', all: true, values: ['1. Surveiller', '2. Commander', '3. Receptionner'] },
                    { selector: '.highlight-label', all: true, values: ['Recherche', 'Scanner', 'Suivi'] },
                    { selector: '.highlight-desc', all: true, values: ['Filtrage par marque et categorie', 'Lecture camera des codes', 'Mise a jour des quantites en direct'] },
                    { selector: '.wf-card .card-header span:last-child', all: true, values: ['Alerte stock faible', 'Liste a commander', 'Recu'] },
                    { selector: '.wf-card .card-body strong', all: true, values: ['Lubrifiant de piece a main', '+ 12 bouteilles', 'Stock mis a jour'] },
                    { selector: '.wf-card .card-body small', all: true, values: ['6 bouteilles restantes', 'Ajoute a la file', 'Nouveau total: 18'] },
                    { selector: '.footer-cta h2', value: 'Pret a mieux organiser votre clinique?' },
                    { selector: '.footer-cta .btn.btn-white', value: 'Telecharger pour iOS' },
                    { selector: '.footer-links p a', all: true, values: ['Conditions d utilisation', 'Politique de confidentialite', 'Support'] },
                    { selector: '.footer-links p:last-child', value: '© 2026 Inventory App. Tous droits reserves.' }
                ],
                'features.html': [
                    { selector: '.feature-nav-item', all: true, values: ['Inventaire', 'A commander', 'Scanner', 'Reception', 'Parametres'] },
                    { selector: '.feature-section .page-header h1', all: true, values: ['La <span class="gradient-text">liste maitresse.</span>', 'Alertes <span class="gradient-text">intelligentes.</span>', 'Recherche <span class="gradient-text">instantanee.</span>', 'Page de <span class="gradient-text">stock.</span>', 'Parametres <span class="gradient-text">admin.</span>'], type: 'html' },
                    { selector: '.feature-section .page-header .hero-subtitle', all: true, values: ['Le hub central pour gerer votre stock.', 'Surveillez les articles qui demandent une action.', 'Trouvez et mettez a jour les articles avec la camera.', 'Gerez les livraisons et les factures entrantes.', 'Configurez l app et visualisez vos rapports.'] },
                    { selector: '.video-loading-text', all: true, values: ['Chargement video...', 'Chargement video...', 'Chargement video...', 'Chargement video...', 'Chargement video...'] },
                    { selector: '#inventory .detail-block h2', all: true, values: ['Gestion des articles', 'Details article', 'Historique de stock', 'Etiquettes et export'] },
                    { selector: '#order .detail-block h2', all: true, values: ['Gestion des alertes', 'Suivi des commandes', 'Operations par lot'] },
                    { selector: '#scan .detail-block h2', all: true, values: ['Capacites de scan', 'Affichage intelligent'] },
                    { selector: '#receiving .detail-block h2', all: true, values: ['Liste de controle stock', 'Stock et factures', 'Retours articles'] },
                    { selector: '#settings .detail-block h2', all: true, values: ['Utilisateurs et acces', 'Archive annuelle', 'Gestion des donnees', 'Configuration des etiquettes', 'Rapports et notifications'] }
                ],
                'inventory.html': [
                    { selector: '.back-nav', value: '← Retour a l accueil' },
                    { selector: '.page-header h1', type: 'html', value: 'La <span class="gradient-text">liste maitresse.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Une visibilite totale sur chaque article de votre clinique.' },
                    { selector: '.detail-block h2', all: true, values: ['Filtres intelligents', 'Niveaux de stock visuels', 'Alertes critiques de stock faible', 'Hierarchie claire'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Tous droits reserves.' }
                ],
                'order.html': [
                    { selector: '.back-nav', value: '← Retour a l accueil' },
                    { selector: '.page-header h1', type: 'html', value: 'Commande <span class="gradient-text">sans effort.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Construisez votre liste d achat automatiquement.' },
                    { selector: '.detail-block h2', all: true, values: ['Tableau de statut', 'Regroupement par fournisseur', 'Action en un geste', 'Visibilite des alertes'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Tous droits reserves.' }
                ],
                'receiving.html': [
                    { selector: '.back-nav', value: '← Retour a l accueil' },
                    { selector: '.page-header h1', type: 'html', value: 'Reception <span class="gradient-text">fluide.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Fermez la boucle quand les colis arrivent.' },
                    { selector: '.detail-block h2', all: true, values: ['Verifier les commandes', 'Suivi des dates', 'Mise a jour en un geste', 'Gestion des factures'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Tous droits reserves.' }
                ],
                'scanner.html': [
                    { selector: '.back-nav', value: '← Retour a l accueil' },
                    { selector: '.page-header h1', type: 'html', value: 'Recherche <span class="gradient-text">instantanee.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Le moyen le plus rapide de gerer votre stock physique.' },
                    { selector: '.detail-block h2', all: true, values: ['Activation immediate', 'Guide visuel', 'Context-aware'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Tous droits reserves.' }
                ],
                'settings.html': [
                    { selector: '.back-nav', value: '← Retour a l accueil' },
                    { selector: '.page-header h1', type: 'html', value: 'Parametres <span class="gradient-text">admin.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Gerez votre clinique et les acces equipe.' },
                    { selector: '.detail-block h2', all: true, values: ['Acces par role', 'Partage du code clinique', 'Controle des notifications', 'Gestion des donnees'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Tous droits reserves.' }
                ],
                'support.html': [
                    { selector: '.back-link', type: 'html', value: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>Retour a l accueil' },
                    { selector: '.support-header h1', value: 'Comment pouvons-nous vous aider?' },
                    { selector: '.support-header p', value: 'Contactez notre equipe support ou trouvez des reponses dans la FAQ' },
                    { selector: '.contact-section h2', value: 'Contactez-nous' },
                    { selector: '.contact-section p', value: 'Une question ou besoin d aide? Nous sommes la pour vous.' },
                    { selector: '.response-time', value: 'Nous repondons generalement sous 24 a 48 heures' },
                    { selector: '.faq-section h2', value: 'Questions frequentes' },
                    { selector: '.faq-category h3', all: true, values: ['🔐 Compte et connexion', '📱 Fonctionnalites et usage', '☁️ Donnees et synchro', '🔧 Depannage'] },
                    { selector: '.additional-help h3', value: 'Besoin d aide supplementaire?' },
                    { selector: '.additional-help p', value: 'Consultez ces ressources ou contactez directement notre equipe support.' },
                    { selector: '.help-link', all: true, values: ['Guide des fonctionnalites', 'Conditions d utilisation', 'Politique de confidentialite'] },
                    { selector: '.footer-cta h2', value: 'Pret a mieux organiser votre clinique?' },
                    { selector: '.footer-cta .btn.btn-white', value: 'Telecharger pour iOS' },
                    { selector: '.footer-links p a', all: true, values: ['Conditions d utilisation', 'Politique de confidentialite', 'Support'] },
                    { selector: '.footer-links p:last-child', value: '© 2026 Inventory App. Tous droits reserves.' }
                ]
            }
        },
        es: {
            meta: {
                'index.html': {
                    title: 'Inventory - Gestion inteligente de inventario dental',
                    description: 'Optimiza el inventario de tu clinica dental con seguimiento inteligente, pedidos rapidos y escaneo instantaneo.'
                },
                'features.html': {
                    title: 'Funciones - Gestion inteligente de inventario dental'
                },
                'inventory.html': {
                    title: 'Detalle inventario - Gestion inteligente de inventario dental'
                },
                'order.html': {
                    title: 'Pedidos - Gestion inteligente de inventario dental'
                },
                'receiving.html': {
                    title: 'Recepcion - Gestion inteligente de inventario dental'
                },
                'scanner.html': {
                    title: 'Escaner - Gestion inteligente de inventario dental'
                },
                'settings.html': {
                    title: 'Configuracion - Gestion inteligente de inventario dental'
                },
                'support.html': {
                    title: 'Soporte - Aplicacion Inventory',
                    description: 'Obtenga ayuda con Inventory App - Contactenos y revise preguntas frecuentes.'
                }
            },
            pages: {
                'index.html': [
                    { selector: '.badge', value: 'Version 2.0 disponible ahora' },
                    { selector: '.hero h1', type: 'html', value: 'Gestion de inventario <br><span class="gradient-text">reinventada.</span>' },
                    { selector: '.hero-subtitle', value: 'Controla tu inventario dental con datos en tiempo real, escaneo inteligente y alertas de bajo stock en una experiencia segura y moderna.' },
                    { selector: '.hero-actions .btn.btn-primary', value: 'Descargar app' },
                    { selector: '.trust-badges span', value: 'Confiado por clinicas lideres' },
                    { selector: '.mockup-header h2', value: 'Inventario' },
                    { selector: '.mockup-search span', value: 'Buscar items o escribir "low"...' },
                    { selector: '.mockup-tags .tag', all: true, values: ['Todo', '3M', '3M ESPE', 'Bausch'] },
                    { selector: '.section-header h2', all: true, values: ['Disenado para la eficiencia.', 'Un flujo de trabajo completo.'] },
                    { selector: '.section-header p', all: true, values: ['Cinco modulos potentes para administrar toda tu clinica.', 'Desde revisar stock hasta recibir entregas, cada paso esta cubierto.'] },
                    { selector: '.feature-card h3', all: true, values: ['Inventario', 'Por pedir', 'Escaner', 'Recepcion', 'Configuracion'] },
                    { selector: '.feature-card p', all: true, values: ['Filtros inteligentes, niveles visuales y alertas criticas.', 'Pedido con un toque y seguimiento de pendientes.', 'Lectura instantanea de codigos y alta rapida.', 'Registrar entregas y verificar facturas al instante.', 'Roles de usuario, codigos de clinica y notificaciones.'] },
                    { selector: '.deep-dive-content h3', all: true, values: ['1. Monitorear', '2. Pedir', '3. Recibir'] },
                    { selector: '.highlight-label', all: true, values: ['Buscar', 'Escanear', 'Seguir'] },
                    { selector: '.highlight-desc', all: true, values: ['Filtrado por marca y categoria', 'Lectura de codigos con camara', 'Actualizacion de cantidades en vivo'] },
                    { selector: '.wf-card .card-header span:last-child', all: true, values: ['Alerta de bajo stock', 'Lista por pedir', 'Recibido'] },
                    { selector: '.wf-card .card-body strong', all: true, values: ['Lubricante de pieza de mano', '+ 12 botellas', 'Stock actualizado'] },
                    { selector: '.wf-card .card-body small', all: true, values: ['6 botellas restantes', 'Agregado a la cola', 'Nuevo total: 18'] },
                    { selector: '.footer-cta h2', value: 'Listo para organizar mejor tu clinica?' },
                    { selector: '.footer-cta .btn.btn-white', value: 'Descargar para iOS' },
                    { selector: '.footer-links p a', all: true, values: ['Terminos de servicio', 'Politica de privacidad', 'Soporte'] },
                    { selector: '.footer-links p:last-child', value: '© 2026 Inventory App. Todos los derechos reservados.' }
                ],
                'features.html': [
                    { selector: '.feature-nav-item', all: true, values: ['Inventario', 'Por pedir', 'Escaner', 'Recepcion', 'Configuracion'] },
                    { selector: '.feature-section .page-header h1', all: true, values: ['La <span class="gradient-text">lista maestra.</span>', 'Alertas <span class="gradient-text">inteligentes.</span>', 'Busqueda <span class="gradient-text">instantanea.</span>', 'Pagina de <span class="gradient-text">stock.</span>', 'Configuracion <span class="gradient-text">admin.</span>'], type: 'html' },
                    { selector: '.feature-section .page-header .hero-subtitle', all: true, values: ['El centro de control de tu inventario.', 'Controla los articulos que requieren accion.', 'Encuentra y actualiza articulos usando la camara.', 'Gestiona entradas de stock y facturas.', 'Configura la app y revisa informes.'] },
                    { selector: '.video-loading-text', all: true, values: ['Cargando video...', 'Cargando video...', 'Cargando video...', 'Cargando video...', 'Cargando video...'] },
                    { selector: '#inventory .detail-block h2', all: true, values: ['Gestion de items', 'Detalles del item', 'Historial de stock', 'Etiquetas y exportacion'] },
                    { selector: '#order .detail-block h2', all: true, values: ['Gestion de alertas', 'Seguimiento de pedidos', 'Operaciones por lote'] },
                    { selector: '#scan .detail-block h2', all: true, values: ['Capacidades de escaneo', 'Visualizacion inteligente'] },
                    { selector: '#receiving .detail-block h2', all: true, values: ['Lista de control de stock', 'Stock y facturas', 'Devoluciones'] },
                    { selector: '#settings .detail-block h2', all: true, values: ['Usuarios y accesos', 'Archivo anual', 'Gestion de datos', 'Configuracion de etiquetas', 'Reportes y notificaciones'] }
                ],
                'inventory.html': [
                    { selector: '.back-nav', value: '← Volver al inicio' },
                    { selector: '.page-header h1', type: 'html', value: 'La <span class="gradient-text">lista maestra.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Visibilidad total de cada item en tu clinica.' },
                    { selector: '.detail-block h2', all: true, values: ['Filtros inteligentes', 'Niveles visuales de stock', 'Alertas criticas de bajo stock', 'Jerarquia clara'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Todos los derechos reservados.' }
                ],
                'order.html': [
                    { selector: '.back-nav', value: '← Volver al inicio' },
                    { selector: '.page-header h1', type: 'html', value: 'Pedidos <span class="gradient-text">sin esfuerzo.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Construye tu lista de compra automaticamente.' },
                    { selector: '.detail-block h2', all: true, values: ['Panel de estado', 'Agrupacion por proveedor', 'Accion con un toque', 'Visibilidad de alertas'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Todos los derechos reservados.' }
                ],
                'receiving.html': [
                    { selector: '.back-nav', value: '← Volver al inicio' },
                    { selector: '.page-header h1', type: 'html', value: 'Recepcion <span class="gradient-text">fluida.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Cierra el ciclo cuando llegan los paquetes.' },
                    { selector: '.detail-block h2', all: true, values: ['Verificar pedidos', 'Seguimiento de fechas', 'Actualizacion con un toque', 'Gestion de facturas'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Todos los derechos reservados.' }
                ],
                'scanner.html': [
                    { selector: '.back-nav', value: '← Volver al inicio' },
                    { selector: '.page-header h1', type: 'html', value: 'Busqueda <span class="gradient-text">instantanea.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'La forma mas rapida de gestionar tu stock fisico.' },
                    { selector: '.detail-block h2', all: true, values: ['Activacion inmediata', 'Guia visual', 'Context-aware'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Todos los derechos reservados.' }
                ],
                'settings.html': [
                    { selector: '.back-nav', value: '← Volver al inicio' },
                    { selector: '.page-header h1', type: 'html', value: 'Configuracion <span class="gradient-text">admin.</span>' },
                    { selector: '.page-header .hero-subtitle', value: 'Administra tu clinica y accesos del equipo.' },
                    { selector: '.detail-block h2', all: true, values: ['Acceso por roles', 'Compartir codigo de clinica', 'Control de notificaciones', 'Gestion de datos'] },
                    { selector: '.footer-content p', value: '© 2026 Inventory App. Todos los derechos reservados.' }
                ],
                'support.html': [
                    { selector: '.back-link', type: 'html', value: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>Volver al inicio' },
                    { selector: '.support-header h1', value: 'Como podemos ayudarte?' },
                    { selector: '.support-header p', value: 'Contacta a nuestro equipo o encuentra respuestas en la FAQ' },
                    { selector: '.contact-section h2', value: 'Contactanos' },
                    { selector: '.contact-section p', value: 'Tienes una pregunta o necesitas ayuda? Estamos para ayudarte.' },
                    { selector: '.response-time', value: 'Normalmente respondemos en 24-48 horas' },
                    { selector: '.faq-section h2', value: 'Preguntas frecuentes' },
                    { selector: '.faq-category h3', all: true, values: ['🔐 Cuenta e inicio de sesion', '📱 Funciones y uso', '☁️ Datos y sincronizacion', '🔧 Solucion de problemas'] },
                    { selector: '.additional-help h3', value: 'Aun necesitas ayuda?' },
                    { selector: '.additional-help p', value: 'Consulta estos recursos o contacta directamente a nuestro equipo.' },
                    { selector: '.help-link', all: true, values: ['Guia de funciones', 'Terminos de servicio', 'Politica de privacidad'] },
                    { selector: '.footer-cta h2', value: 'Listo para organizar mejor tu clinica?' },
                    { selector: '.footer-cta .btn.btn-white', value: 'Descargar para iOS' },
                    { selector: '.footer-links p a', all: true, values: ['Terminos de servicio', 'Politica de privacidad', 'Soporte'] },
                    { selector: '.footer-links p:last-child', value: '© 2026 Inventory App. Todos los derechos reservados.' }
                ]
            }
        }
    };

    function normalizeLang(raw) {
        const value = (raw || '').toLowerCase();
        if (value.startsWith('fr')) return 'fr';
        if (value.startsWith('es')) return 'es';
        return 'en';
    }

    function currentPage() {
        const basename = window.location.pathname.split('/').pop();
        return basename || 'index.html';
    }

    function setOriginalValue(node, type, attrName) {
        if (!node) return;

        if (type === 'html') {
            if (!node.dataset.i18nOriginalHtml) {
                node.dataset.i18nOriginalHtml = node.innerHTML;
            }
            return;
        }

        if (type === 'attr') {
            const key = `i18nOriginalAttr${attrName.charAt(0).toUpperCase()}${attrName.slice(1)}`;
            if (!node.dataset[key]) {
                const current = node.getAttribute(attrName) || '';
                node.dataset[key] = current;
            }
            return;
        }

        if (!node.dataset.i18nOriginalText) {
            node.dataset.i18nOriginalText = node.textContent || '';
        }
    }

    function restoreOriginalValue(node, type, attrName) {
        if (!node) return;

        if (type === 'html') {
            if (node.dataset.i18nOriginalHtml !== undefined) {
                node.innerHTML = node.dataset.i18nOriginalHtml;
            }
            return;
        }

        if (type === 'attr') {
            const key = `i18nOriginalAttr${attrName.charAt(0).toUpperCase()}${attrName.slice(1)}`;
            if (node.dataset[key] !== undefined) {
                node.setAttribute(attrName, node.dataset[key]);
            }
            return;
        }

        if (node.dataset.i18nOriginalText !== undefined) {
            node.textContent = node.dataset.i18nOriginalText;
        }
    }

    function applyTranslatedValue(node, type, value, attrName) {
        if (!node || value === undefined || value === null) return;

        if (type === 'html') {
            node.innerHTML = value;
            return;
        }

        if (type === 'attr') {
            node.setAttribute(attrName, value);
            return;
        }

        node.textContent = value;
    }

    function applyEntries(lang) {
        const page = currentPage();
        const pageEntries = TRANSLATIONS[lang]?.pages?.[page] || [];

        pageEntries.forEach((entry) => {
            const type = entry.type === 'html' ? 'html' : (entry.type === 'attr' ? 'attr' : 'text');
            const attrName = entry.attrName || '';
            const nodes = entry.all
                ? Array.from(document.querySelectorAll(entry.selector))
                : [document.querySelector(entry.selector)];

            nodes.forEach((node, index) => {
                if (!node) return;

                setOriginalValue(node, type, attrName);

                if (lang === 'en') {
                    restoreOriginalValue(node, type, attrName);
                    return;
                }

                const translated = Array.isArray(entry.values) ? entry.values[index] : entry.value;
                if (translated === undefined) return;
                applyTranslatedValue(node, type, translated, attrName);
            });
        });
    }

    function restorePageOriginals() {
        const page = currentPage();
        const allEntries = [];

        SUPPORTED_LANGS.filter((langCode) => langCode !== 'en').forEach((langCode) => {
            const pageEntries = TRANSLATIONS[langCode]?.pages?.[page] || [];
            allEntries.push(...pageEntries);
        });

        allEntries.forEach((entry) => {
            const type = entry.type === 'html' ? 'html' : (entry.type === 'attr' ? 'attr' : 'text');
            const attrName = entry.attrName || '';
            const nodes = entry.all
                ? Array.from(document.querySelectorAll(entry.selector))
                : [document.querySelector(entry.selector)];

            nodes.forEach((node) => {
                if (!node) return;
                restoreOriginalValue(node, type, attrName);
            });
        });
    }

    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

    function applyMeta(lang) {
        if (lang === 'en') {
            document.title = originalTitle;
            const metaTag = document.querySelector('meta[name="description"]');
            if (metaTag && originalDescription) {
                metaTag.setAttribute('content', originalDescription);
            }
            return;
        }

        const page = currentPage();
        const translatedMeta = TRANSLATIONS[lang]?.meta?.[page];
        if (!translatedMeta) return;

        if (translatedMeta.title) {
            document.title = translatedMeta.title;
        }

        if (translatedMeta.description) {
            const metaTag = document.querySelector('meta[name="description"]');
            if (metaTag) {
                metaTag.setAttribute('content', translatedMeta.description);
            }
        }
    }

    function applyCommonNavigation(lang) {
        const labels = {
            en: {
                features: 'Features',
                workflow: 'Workflow',
                support: 'Support',
                download: 'Download App'
            },
            fr: {
                features: 'Fonctionnalites',
                workflow: 'Flux',
                support: 'Support',
                download: 'Telecharger l app'
            },
            es: {
                features: 'Funciones',
                workflow: 'Flujo',
                support: 'Soporte',
                download: 'Descargar app'
            }
        };

        const textSet = labels[lang] || labels.en;

        document.querySelectorAll('.nav-links a').forEach((link) => {
            const href = (link.getAttribute('href') || '').toLowerCase();
            if (href.includes('feature')) {
                link.textContent = textSet.features;
                return;
            }
            if (href.includes('workflow') || href === '#workflow') {
                link.textContent = textSet.workflow;
                return;
            }
            if (href.includes('support')) {
                link.textContent = textSet.support;
            }
        });

        document.querySelectorAll('.btn.btn-primary.btn-sm').forEach((buttonLink) => {
            buttonLink.textContent = textSet.download;
        });
    }

    function buildLangSwitcher() {
        const navLinksContainer = document.querySelector('.nav-links');
        if (!navLinksContainer) return;
        if (navLinksContainer.querySelector('.lang-switcher-inline')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'lang-switcher-inline';
        wrapper.setAttribute('aria-label', 'Language switcher');

        SUPPORTED_LANGS.forEach((langCode) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.setAttribute('data-lang', langCode);
            btn.textContent = langCode.toUpperCase();
            btn.addEventListener('click', () => {
                applyLanguage(langCode);

                const navMenu = document.querySelector('.nav-links');
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                navMenu?.classList.remove('active');
                mobileToggle?.classList.remove('active');
            });
            wrapper.appendChild(btn);
        });

        navLinksContainer.appendChild(wrapper);
    }

    function setSwitcherActive(lang) {
        document.querySelectorAll('.lang-switcher-inline button').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    function updateLocalizedLinks(lang) {
        document.querySelectorAll('a[href]').forEach((link) => {
            const href = link.getAttribute('href');
            if (!href) return;
            if (href === '#') return;
            if (href.startsWith('#')) return;
            if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http') || href.startsWith('javascript:')) return;

            const [pathWithQuery, hashFragment] = href.split('#');
            if (!pathWithQuery) return;

            const queryIndex = pathWithQuery.indexOf('?');
            const basePath = queryIndex >= 0 ? pathWithQuery.slice(0, queryIndex) : pathWithQuery;
            const queryString = queryIndex >= 0 ? pathWithQuery.slice(queryIndex + 1) : '';

            if (!basePath.endsWith('.html')) return;

            const params = new URLSearchParams(queryString);
            if (lang === 'en') {
                params.delete('lang');
            } else {
                params.set('lang', lang);
            }

            const nextQuery = params.toString();
            const nextHash = hashFragment ? `#${hashFragment}` : '';
            const nextHref = `${basePath}${nextQuery ? `?${nextQuery}` : ''}${nextHash}`;
            link.setAttribute('href', nextHref);
        });
    }

    function updateCurrentUrlLang(lang) {
        const url = new URL(window.location.href);
        if (lang === 'en') {
            url.searchParams.delete('lang');
        } else {
            url.searchParams.set('lang', lang);
        }
        window.history.replaceState({}, '', url.toString());
    }

    function applyLanguage(rawLang) {
        const lang = normalizeLang(rawLang);
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);

        applyMeta(lang);
        applyCommonNavigation(lang);

        // Always restore to the original English DOM first.
        restorePageOriginals();
        if (lang !== 'en') {
            applyEntries(lang);
        }

        setSwitcherActive(lang);
        updateLocalizedLinks(lang);
        updateCurrentUrlLang(lang);
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Smooth scroll for in-page anchors only
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');
            if (!targetSelector || targetSelector === '#') return;
            const targetNode = document.querySelector(targetSelector);
            if (!targetNode) return;

            e.preventDefault();
            targetNode.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Fade-in elements
    const elementsToAnimate = document.querySelectorAll('.feature-card, .deep-dive-content, .mockup-item');
    elementsToAnimate.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    const injectedStyle = document.createElement('style');
    injectedStyle.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(injectedStyle);

    // Feature Page Tab Switching
    const navItems = document.querySelectorAll('.feature-nav-item');
    const sections = document.querySelectorAll('.feature-section');

    if (navItems.length > 0) {
        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                const targetId = item.getAttribute('data-target');

                navItems.forEach((nav) => nav.classList.remove('active'));
                item.classList.add('active');

                sections.forEach((section) => {
                    section.classList.remove('active');
                    if (section.id === targetId) {
                        setTimeout(() => {
                            section.classList.add('active');
                        }, 50);
                    }
                });
            });
        });

        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        if (tabParam) {
            const targetNav = document.querySelector(`.feature-nav-item[data-target="${tabParam}"]`);
            if (targetNav) {
                targetNav.click();
            }
        }
    }

    // Video Loading with Progress Bar
    const videos = document.querySelectorAll('video');

    videos.forEach((video) => {
        const wrapper = video.closest('.detail-phone-wrapper');
        if (!wrapper) return;

        const progressFill = wrapper.querySelector('.video-progress-fill');
        const loadingText = wrapper.querySelector('.video-loading-text');

        const getLoadingLabel = () => UI_STRINGS[currentLang]?.loadingVideo || UI_STRINGS.en.loadingVideo;

        video.addEventListener('progress', () => {
            if (video.duration && video.buffered.length > 0) {
                let percent = 0;

                for (let i = 0; i < video.buffered.length; i += 1) {
                    if (video.buffered.start(i) <= video.currentTime && video.buffered.end(i) >= video.currentTime) {
                        const bufferedEnd = video.buffered.end(i);
                        percent = (bufferedEnd / video.duration) * 100;
                        if (progressFill) progressFill.style.width = `${Math.min(percent, 100)}%`;
                        if (loadingText) loadingText.textContent = `${getLoadingLabel()} ${Math.round(Math.min(percent, 100))}%`;
                        break;
                    }
                }

                if (video.buffered.length > 0) {
                    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                    percent = (bufferedEnd / video.duration) * 100;
                    if (progressFill) progressFill.style.width = `${Math.min(percent, 100)}%`;
                    if (loadingText) loadingText.textContent = `${getLoadingLabel()} ${Math.round(Math.min(percent, 100))}%`;
                }
            }
        });

        const onVideoReady = () => {
            video.classList.add('loaded');
            wrapper.classList.add('video-ready');
            if (progressFill) progressFill.style.width = '100%';
            if (loadingText) loadingText.textContent = `${getLoadingLabel()} 100%`;
        };

        video.addEventListener('canplay', onVideoReady);
        video.addEventListener('loadeddata', onVideoReady);

        if (video.readyState >= 3) {
            onVideoReady();
        }
    });

    // Optional basic search demo on support page
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-btn');
    if (searchInput && searchButton) {
        const runSearch = () => {
            const query = searchInput.value.trim();
            if (!query) return;
            const ui = UI_STRINGS[currentLang] || UI_STRINGS.en;
            alert(`${ui.searchSoon}\n${ui.responseCaptured} ${query}`);
        };

        searchButton.addEventListener('click', runSearch);
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                runSearch();
            }
        });
    }

    // Init i18n after DOM exists
    buildLangSwitcher();
    const initialLang = normalizeLang(new URLSearchParams(window.location.search).get('lang') || 'en');
    applyLanguage(initialLang);
});

// ===== 전역 변수 =====
let galleryImages = [];

// ===== 이미지 데이터 =====
const imageData = {
    leehan: [
        "Leehan_usual_expression.jpg",
        "Leehan_affectionate_gaze.jpg",
        "Leehan_faint_smile.jpg",
        "Leehan_unusually_serious.jpg",
        "Leehan_entering_the_house.jpg",
        "Leehan_pulling_someone_away_from_danger.jpg",
        "Leehan_getting_drunk.jpg",
        "Leehan_treating_an_injury.jpg",
        "Leehan_slightly_flustered.jpg",
        "Leehan_steady_gaze.jpg",
        "Leehan's_tense_moment.jpg",
        "Leehan_holding_an_umbrella_for_someone.jpg",
        "Leehan_taking_off_his_jacket_for_someone.jpg",
        "Leehan_eating_ramen_together.jpg",
        "Leehan_sharing_earphones.jpg",
        "Leehan_reading_manga_together.jpg",
        "Leehan_arcade_date.jpg",
        "Leehan_drinking_together.jpg",
        "Leehan_laughing.jpg",
        "Leehan_coming_outside_in_pajamas.jpg",
        "Leehan_getting_caught_crying.jpg",
        "Leehan_buying_something_from_a_convenience.jpg",
        "Leehan_coming_closer.jpg",
        "Leehan_coming_out_to_greet_with_an_umbrella.jpg",
        "Leehan_distance_closing_while_reading_manga.jpg",
        "Leehan_dozing_off_from_fatigue.jpg",
        "Leehan_eating_together_at_a_convenience_store.jpg",
        "Leehan_getting_completely_drunk.jpg",
        "Leehan_hiding_his_crying_face.jpg",
        "Leehan_indifferent_expression.jpg",
        "Leehan_leaning_on_the_sofa_like_it's_his_home.jpg",
        "Leehan_looking_up_at_the_apartment_from_outside.jpg",
        "Leehan_lying_down_comfortably_as_if_at_home.jpg",
        "Leehan_natural_conversation.jpg",
        "Leehan_NSFW_humping.jpg",
        "Leehan_NSFW_masturbation.jpg",
        "Leehan_NSFW_missionary_sex.jpg",
        "Leehan_NSFW_orgasm_face_closeup.jpg",
        "Leehan_NSFW_semen_splatter.jpg",
        "Leehan_NSFW_taking_off_shirt.jpg",
        "Leehan_pointing_out_the_key_study_point.jpg",
        "Leehan_shedding_tears.jpg",
        "Leehan_taking_a_photo_for_someone.jpg",
        "Leehan_tutoring_for_an_assignment.jpg",
        "Leehan_waiting_and_bumping_into.jpg",
        "Leehan_waiting_in_front_of_the_door.jpg",
        "Leehan_yawning.jpg",
        "Leehan's_drunken_confession.jpg"
    ],
    garam: [
        "Garam_fresh_smile.jpg",
        "Garam_calm_smile.jpg",
        "Garam's_one-sided_love_glance.jpg",
        "Garam_pleading_earnestly.jpg",
        "Garam_sharing_snacks.jpg",
        "Garam_tying_someone's_shoelaces.jpg",
        "Garam_feeding_a_lunchbox.jpg",
        "Garam_gazing_steadily_in_the_library.jpg",
        "Garam_pleading_with_desperate_tears.jpg",
        "Garam_being_secretly_jealous.jpg",
        "Garam_hugging_from_behind.jpg",
        "Garam_bringing_face_up_close.jpg",
        "Garam_grabbing_the_edge_of_the_collar.jpg",
        "Garam_eating_together.jpg",
        "Garam_amusement_park_selfie.jpg",
        "Garam_holding_an_umbrella_for_someone.jpg",
        "Garam_tutoring_for_studies.jpg",
        "Garam_running_over_happily.jpg",
        "Garam_pouting.jpg",
        "Garam_getting_sulky.jpg",
        "Garam_hiccuping_while_crying.jpg",
        "Garam_being_touched.jpg",
        "Garam_casually_carrying_a_bag.jpg",
        "Garam_covering_with_a_blanket.jpg",
        "Garam_cute_headband_at_amusement_park.jpg",
        "Garam_getting_anxious_with_no_contact.jpg",
        "Garam_handing_over_a_note.jpg",
        "Garam_hiding_crying_face.jpg",
        "Garam_kissing_the_back_of_a_hand.jpg",
        "Garam_lending_or_taking_a_pen.jpg",
        "Garam_naturally_touching_hands.jpg",
        "Garam_NSFW_masturbation_cumming.jpg",
        "Garam_NSFW_masturbation_pleasure.jpg",
        "Garam_NSFW_missionary_sex_cumshot.jpg",
        "Garam_NSFW_missionary_sex_scene.jpg",
        "Garam_playfully_tapping_on_the_head.jpg",
        "Garam_shedding_tears.jpg",
        "Garam_stepping_back_in_fluster.jpg",
        "Garam_too_shy_to_know_what_to_do.jpg",
        "Garam_trembling_and_fluttering.jpg",
        "Garam_waiting.jpg",
        "Garam's_face_turning_red_from_embarrassment.jpg"
    ],
    jaei: [
        "Jaei_smiling.jpg",
        "Jaei_sitting_on_the_windowsill.jpg",
        "Jaei_happy_smile.jpg",
        "Jaei_leaning_in.jpg",
        "Jaei_grabbing_a_hand_asking_not_to_go.jpg",
        "Jaei_hugging_despairingly.jpg",
        "Jaei_kneeling_and_looking_up.jpg",
        "Jaei_anxiously_biting_fingers.jpg",
        "Jaei_unstable_hand_trembling.jpg",
        "Jaei_only_thinking_of_the_user.jpg",
        "Jaei_hugging_desperately.jpg",
        "Jaei_holding_out_a_hand.jpg",
        "Jaei_sitting_on_the_edge_of_the_bed.jpg",
        "Jaei_secretly_watching.jpg",
        "Jaei_only_looking_at_the_other_person_in_library.jpg",
        "Jaei_helping_with_assignment.jpg",
        "Jaei_staring_blankly_out_the_window.jpg",
        "Jaei_messy_hair.jpg",
        "Jaei_yawning_sleepily.jpg",
        "Jaei_seduction.jpg",
        "Jaei_erotic_look_with_tongue_out.jpg",
        "Jaei_BDSM_eyes_and_hands_tied.jpg",
        "Jaei_disheveled_clothes.jpg",
        "Jaei_erotically_licking_fingers.jpg",
        "Jaei_getting_a_drink_for_someone.jpg",
        "Jaei_handing_over_an_item.jpg",
        "Jaei_holding_an_umbrella_for_someone.jpg",
        "Jaei_licking_a_hand.jpg",
        "Jaei_NSFW_anxious_waiting_and_tension.jpg",
        "Jaei_NSFW_BDSM_play_scene.jpg",
        "Jaei_NSFW_cumming.jpg",
        "Jaei_NSFW_flinching_in_pleasure_or_pain.jpg",
        "Jaei_NSFW_getting_caught_masturbating.jpg",
        "Jaei_NSFW_humping.jpg",
        "Jaei_NSFW_lying_face_down.jpg",
        "Jaei_NSFW_masturbation_trembling.jpg",
        "Jaei_NSFW_masturbation.jpg",
        "Jaei_NSFW_missionary_sex.jpg",
        "Jaei_seducing_in_a_shirt_only.jpg",
        "Jaei_subtly_spreading_legs.jpg",
        "Jaei_tilting_the_umbrella_towards_the_other_person.jpg",
        "Jaei_unbuttoned_shirt.jpg",
        "Jaei_waving_hand.jpg",
        "Jaei_wiping_off_ink.jpg",
        "Jaei's_cute_seduction.jpg"
    ],
    haejun: [
        "Haejun_cigarette_and_indifferent_gaze.jpg",
        "Haejun_smiling_while_smoking.jpg",
        "Haejun_lighting_a_cigarette.jpg",
        "Haejun_leaning_back_on_the_sofa.jpg",
        "Haejun_snatching_a_phone.jpg",
        "Haejun_acting_firmly.jpg",
        "Haejun_subtle_seduction.jpg",
        "Haejun_stroking_the_other_person's_head.jpg",
        "Haejun_treating_an_injured_hand.jpg",
        "Haejun_taking_off_his_jacket_for_someone.jpg",
        "Haejun_at_the_library.jpg",
        "Haejun_studying_together.jpg",
        "Haejun_suggesting_a_drink_together.jpg",
        "Haejun_getting_a_drink_for_someone.jpg",
        "Haejun_handing_over_water.jpg",
        "Haejun_approaching_the_next_seat.jpg",
        "Haejun_exhaling_cigarette_smoke.jpg",
        "Haejun_active_kiss.jpg",
        "Haejun_looking_at_the_snatched_phone.jpg",
        "Haejun_NSFW_cunnilingus_or_oral_sex.jpg",
        "Haejun_NSFW_dom's_missionary_sex.jpg",
        "Haejun_NSFW_missionary_sex.jpg",
        "Haejun_receiving_a_kiss.jpg",
        "Haejun_smoking_while_looking_out_the_window.jpg",
        "Haejun_waiting_for_a_call.jpg",
        "Haejun_waiting_indifferently.jpg"
    ]
};

// ===== DOM 로드 후 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMusicPlayer();
    initScrollAnimations();
    initGallery();
    initImageModal();
    initSmoothScroll();
});

// ===== 네비게이션 =====
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 햄버거 메뉴 토글
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // 메뉴 링크 클릭시 메뉴 닫기
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // 스크롤시 네비게이션 스타일 변경
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== 음악 플레이어 =====
function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicToggle.classList.add('playing');
            }).catch(error => {
                console.log('음악 재생 실패:', error);
            });
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });

    // 음악이 끝났을 때 버튼 상태 업데이트
    bgMusic.addEventListener('ended', () => {
        musicToggle.classList.remove('playing');
    });

    // 음악 재생 중 에러 처리
    bgMusic.addEventListener('error', (e) => {
        console.log('음악 로드 에러:', e);
        musicToggle.style.display = 'none';
    });
}

// ===== 스크롤 애니메이션 =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들
    const animatedElements = document.querySelectorAll(`
        .intro-content,
        .location-card,
        .character-header,
        .detail-block,
        .dialogue-bubble,
        .trait-item,
        .scene-card
    `);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== 갤러리 =====
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // 모든 이미지 데이터 수집
    galleryImages = [];
    Object.keys(imageData).forEach(character => {
        imageData[character].forEach(imageName => {
            galleryImages.push({
                character: character,
                name: imageName,
                path: `러브인캠퍼스 이미지/${imageName}`
            });
        });
    });

    // 초기 갤러리 렌더링
    renderGallery('all');

    // 필터 버튼 이벤트
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderGallery(filter);
        });
    });
}

function renderGallery(filter) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    let filteredImages = galleryImages;
    if (filter !== 'all') {
        filteredImages = galleryImages.filter(img => img.character === filter);
    }

    filteredImages.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${img.path}" alt="${getCharacterName(img.character)}" loading="lazy">
            <div class="gallery-item-overlay">
                <div class="gallery-item-title">${getCharacterName(img.character)}</div>
            </div>
        `;
        
        // 이미지 클릭시 모달 열기
        galleryItem.addEventListener('click', () => {
            openImageModal(img.path, getCharacterName(img.character));
        });

        galleryGrid.appendChild(galleryItem);
    });

    // 애니메이션 효과
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.4s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 30);
    });
}

function getCharacterName(character) {
    const names = {
        leehan: '권이한',
        garam: '도가람',
        jaei: '한재이',
        haejun: '차해준'
    };
    return names[character] || '';
}

// ===== 이미지 모달 =====
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    
    // 모든 이미지에 클릭 이벤트 추가
    document.querySelectorAll('.profile-main-img, .profile-sub-images img, .image-gallery-grid img, .scene-images img').forEach(img => {
        img.addEventListener('click', () => {
            openImageModal(img.src, img.alt);
        });
    });

    // 모달 닫기
    modalClose.addEventListener('click', closeImageModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
}

function openImageModal(src, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.classList.add('active');
    modalImg.src = src;
    modalCaption.textContent = caption;
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== 부드러운 스크롤 =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== 페이지 로드시 애니메이션 =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== 성능 최적화: 이미지 레이지 로딩 =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    // 나중에 레이지 로딩이 필요한 이미지에 적용
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== 반응형 테이블 처리 =====
function handleResponsiveTables() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('table-responsive')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
}

// ===== 모바일 뷰포트 높이 조정 =====
function setMobileVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setMobileVH);
setMobileVH();

// ===== 스크롤 진행 표시 (선택적) =====
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // 진행바가 있다면 업데이트
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ===== 외부 링크 새 탭에서 열기 =====
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===== 콘솔 메시지 =====
console.log('%c Love in Campus 💕', 'font-size: 24px; font-weight: bold; color: #8b4513;');
console.log('%c 러브 인 캠퍼스에 오신 것을 환영합니다!', 'font-size: 14px; color: #666;');


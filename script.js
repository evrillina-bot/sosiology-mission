const levelData = [
    {
        id: 1,
        title: "Perubahan Sosial",
        icon: "fa-sliders",
        desc: "Menganalisis fenomena perubahan struktural & kultural masyarakat.",
        questions: [
            {
                type: "Studi Kasus",
                question: "Masyarakat pedesaan kini banyak memanfaatkan smartphone untuk memantau harga komoditas pasar secara realtime. Perubahan ini termasuk dalam kategori...",
                options: [
                    "Perubahan regresif yang menurunkan nilai lokal",
                    "Perubahan direncanakan yang berdampak positif (progres)",
                    "Perubahan kecil yang tidak mempengaruhi struktur sosial",
                    "Perubahan lambat (evolusi) tanpa dorongan teknologi"
                ],
                answer: 1,
                explanation: "Penggunaan teknologi untuk efisiensi ekonomi merupakan contoh perubahan sosial yang direncanakan dan bersifat progres (membawa kemajuan)."
            },
            {
                type: "Analisis Fenomena",
                question: "Peralihan dari masyarakat agraris menuju masyarakat industri sering memicu disorganisasi sosial sementara. Hal ini terjadi karena...",
                options: [
                    "Lembaga sosial baru belum terbentuk sempurna menggantikan nilai lama",
                    "Masyarakat menolak segala bentuk kemajuan teknologi",
                    "Pemerintah tidak terlibat dalam proses modernisasi",
                    "Tingkat pendidikan masyarakat selalu mengalami penurunan"
                ],
                answer: 0,
                explanation: "Disorganisasi terjadi ketika lembaga sosial dan nilai-nilai lama mulai memudar, sementara nilai/lembaga baru belum terinternalisasi penuh (cultural lag)."
            },
            {
                type: "Sebab-Akibat",
                question: "Pernyataan: Bencana alam dapat memicu perubahan sosial secara cepat.\nSebab: Bencana merusak infrastruktur dan memaksa masyarakat menyesuaikan pola hidup baru.\nManakah analisis yang paling tepat?",
                options: [
                    "Pernyataan benar, sebab benar, dan keduanya menunjukkan hubungan sebab-akibat",
                    "Pernyataan benar, sebab benar, tetapi tidak berhubungan",
                    "Pernyataan salah, tetapi sebab benar",
                    "Pernyataan dan sebab keduanya salah"
                ],
                answer: 0,
                explanation: "Faktor eksternal seperti bencana alam memaksa reorganisasi lingkungan sosial dan fisik secara ekstrem dalam waktu singkat."
            },
            {
                type: "Situasi Sehari-hari",
                question: "Tren fashion retro tahun 80-an kembali populer di kalangan remaja saat ini. Pola perubahan sosial ini sesuai dengan teori...",
                options: [
                    "Teori Linier",
                    "Teori Siklus",
                    "Teori Konflik",
                    "Teori Fungsionalis"
                ],
                answer: 1,
                explanation: "Teori siklus memandang bahwa perubahan sosial berputar berulang kali, di mana pola gaya hidup masa lalu dapat kembali diminati di masa kini."
            },
            {
                type: "Analisis Konsep",
                question: "Berikut ini yang merupakan pendorong utama terjadinya perubahan sosial yang berasal dari DALAM masyarakat (internal) adalah...",
                options: [
                    "Penemuan teknologi baru (inovasi) dan konflik antarkelompok",
                    "Bencana alam dan masuknya kebudayaan asing",
                    "Invasi militer negara lain dan peperangan",
                    "Perubahan iklim global dan fluktuasi harga minyak"
                ],
                answer: 0,
                explanation: "Inovasi internal dan konflik intern merupakan faktor pendorong perubahan sosial yang berasal dari dalam (faktor internal)."
            }
        ]
    },
    {
        id: 2,
        title: "Globalisasi & Modernisasi",
        icon: "fa-globe-americas",
        desc: "Menghadapi tantangan teknologi, ekonomi, dan budaya global.",
        questions: [
            {
                type: "Studi Kasus",
                question: "Anak muda di Indonesia sangat menggemari musik K-Pop dan mengadopsi gaya berpakaian Korea Selatan. Fenomena ini mengindikasikan adanya...",
                options: [
                    "Westernisasi berlebihan",
                    "Glocalisasi budaya lokal",
                    "Penetrasi budaya asing (Globalisasi budaya)",
                    "Isolasi kebudayaan nasional"
                ],
                answer: 2,
                explanation: "Masuknya unsur budaya luar negeri secara masif akibat transparansi informasi global dinamakan penetrasi budaya/globalisasi budaya."
            },
            {
                type: "Situasi Sehari-hari",
                question: "Seseorang membeli barang-barang bermerek impor secara berlebihan hanya demi status sosial di media sosial. Sikap ini merupakan dampak negatif modernisasi yang disebut...",
                options: [
                    "Individualisme",
                    "Konsumerisme",
                    "Sekularisme",
                    "Hedonisme"
                ],
                answer: 1,
                explanation: "Konsumerisme adalah gaya hidup yang menganggap barang-barang mewah sebagai ukuran kebahagiaan dan status, bukan kebutuhan."
            },
            {
                type: "Analisis Dampak",
                question: "Modernisasi sistem pembayaran menggunakan QRIS mendorong efisiensi transaksi ekonomi. Namun, hal ini berdampak negatif bagi masyarakat yang...",
                options: [
                    "Menguasai teknologi finansial",
                    "Mengalami gagap teknologi (Digital Divide)",
                    "Memiliki modal usaha besar",
                    "Bekerja di sektor perbankan"
                ],
                answer: 1,
                explanation: "Modernisasi digital dapat mengeksklusi kelompok yang mengalami kesenjangan digital (digital divide) dan kurang literasi teknologi."
            },
            {
                type: "Konsep Sosiologi",
                question: "Kondisi di mana perkembangan teknologi melaju cepat namun tidak diimbangi oleh kesiapan mental dan nilai moral masyarakat dinamakan...",
                options: [
                    "Cultural Shock",
                    "Cultural Lag",
                    "Cultural Anomie",
                    "Cultural Relativism"
                ],
                answer: 1,
                explanation: "Cultural Lag (ketertinggalan budaya) terjadi saat unsur material (teknologi) berkembang lebih cepat daripada unsur non-material (nilai/sikap)."
            },
            {
                type: "Sebab-Akibat",
                question: "Pasar bebas antarnegara memungkinkan barang impor murah memenuhi pasar domestik. Dampak sosiologis paling nyata bagi pengrajin lokal adalah...",
                options: [
                    "Peningkatan integrasi antar pedagang lokal",
                    "Ancaman marginalisasi ekonomi pengrajin lokal",
                    "Penguatan kearifan lokal secara otomatis",
                    "Hilangnya sistem mata uang nasional"
                ],
                answer: 1,
                explanation: "Arus produk asing tanpa perlindungan industri kecil dapat meminggirkan (memarginalkan) produsen lokal yang kalah saing modal dan teknologi."
            }
        ]
    },
    {
        id: 3,
        title: "Ketimpangan Sosial",
        icon: "fa-scale-unbalanced-flip",
        desc: "Menganalisis kesenjangan ekonomi, pendidikan, & akses.",
        questions: [
            {
                type: "Studi Kasus",
                question: "Di kota besar, gedung pencakar langit megah berdiri persis di sebelah pemukiman kumuh. Fenomena ini merefleksikan ketimpangan...",
                options: [
                    "Spasial dan sosio-ekonomi",
                    "Antargenerasi",
                    "Gender dan budaya",
                    "Politik regional"
                ],
                answer: 0,
                explanation: "Pemandangan tersebut memperlihatkan ketimpangan spasial (ruang) dan ekonomi antara kelas atas dan masyarakat marjinal di perkotaan."
            },
            {
                type: "Analisis Kebijakan",
                question: "Anak-anak dari keluarga miskin kerap kesulitan mengakses sekolah berkualitas karena keterbatasan biaya. Bentuk ketimpangan ini bersumber dari struktural karena...",
                options: [
                    "Siswa miskin tidak memiliki motivasi belajar",
                    "Kebijakan pendidikan belum sepenuhnya merata dan inklusif",
                    "Faktor genetik mempengaruhi intelegensi",
                    "Masyarakat desa menolak sekolah formal"
                ],
                answer: 1,
                explanation: "Ketimpangan struktural disebabkan oleh sistem atau kebijakan yang belum mampu menjangkau dan memberdayakan seluruh lapisan masyarakat."
            },
            {
                type: "Sebab-Akibat",
                question: "Pernyataan: Ketimpangan sosial yang tajam dapat memicu meningkatnya angka kriminalitas.\nSebab: Rasa cemburu sosial dan desakan kebutuhan hidup yang tak terpenuhi mendorong penyimpangan sosial.",
                options: [
                    "Pernyataan dan sebab benar, berhubungan sebab-akibat",
                    "Pernyataan benar, sebab salah",
                    "Pernyataan salah, sebab benar",
                    "Keduanya salah"
                ],
                answer: 0,
                explanation: "Kesenjangan sosial yang ekstrem memicu kekecewaan relatif (relative deprivation) yang bermuara pada tindakan kriminal atau konflik."
            },
            {
                type: "Situasi Sehari-hari",
                question: "Laki-laki dan perempuan di suatu perusahaan mendapat beban kerja yang sama, tetapi gaji pekerja wanita lebih rendah. Ini contoh ketimpangan berdasarkan...",
                options: [
                    "Etnisitas",
                    "Gender",
                    "Usia",
                    "Wilayah"
                ],
                answer: 1,
                explanation: "Kesenjangan diskriminatif berbasis perbedaan jenis kelamin dinamakan ketimpangan gender."
            },
            {
                type: "Analisis Solutif",
                question: "Langkah paling efektif untuk memutus rantai ketimpangan sosial antargenerasi (intergenerational inequality) adalah...",
                options: [
                    "Pemberian bantuan bansos konsumtif secara terus-menerus",
                    "Peningkatan akses pendidikan berkualitas dan pelatihan keterampilan gratis",
                    "Pembangunan mal dan pusat perbelanjaan baru",
                    "Pembatasan migrasi penduduk desa ke kota"
                ],
                answer: 1,
                explanation: "Pendidikan adalah mobilitas sosial vertikal utama yang mampu mengangkat status ekonomi keluarga secara berkelanjutan."
            }
        ]
    },
    {
        id: 4,
        title: "Kearifan Lokal",
        icon: "fa-hands-holding-circle",
        desc: "Mengidentifikasi nilai dan fungsi kearifan lokal nusantara.",
        questions: [
            {
                type: "Studi Kasus",
                question: "Masyarakat Baduy Dalam membagi wilayah hutan menjadi wilayah terlarang yang tidak boleh ditebang sama sekali. Nilai kearifan lokal ini berfungsi untuk...",
                options: [
                    "Menutup diri dari perkembangan dunia luar semata",
                    "Konservasi lingkungan dan menjaga keseimbangan ekosistem",
                    "Menjual kayu dengan harga tinggi di masa depan",
                    "Menghindari pajak tanah dari pemerintah"
                ],
                answer: 1,
                explanation: "Kearifan lokal tatanan lingkungan seperti hutan larangan bertujuan utama untuk menjaga kelestarian ekologis demi keberlangsungan hidup."
            },
            {
                type: "Situasi Sehari-hari",
                question: "Tradisi 'Subak' di Bali mengatur pembagian air irigasi pertanian secara adil dan religius. Kearifan lokal ini mencerminkan fungsi...",
                options: [
                    "Pengembangan sumber daya manusia",
                    "Pengelolaan sumber daya alam dan penguatan solidaritas sosial",
                    "Alat politik untuk kekuasaan",
                    "Komersialisasi air minum"
                ],
                answer: 1,
                explanation: "Subak mengatur tata kelola alam (air) sekaligus membangun nilai gotong royong dan keadilan sosial dalam pertanian."
            },
            {
                type: "Analisis Tantangan",
                question: "Ancaman terbesar terhadap keberlangsungan kearifan lokal di era modernisasi digital saat ini adalah...",
                options: [
                    "Pergeseran nilai kebudayaan ke arah individualisme dan komersialisasi",
                    "Banyaknya penelitian akademis tentang budaya",
                    "Dukungan pemerintah terhadap wisata budaya",
                    "Kurangnya buku teks sosiologi di sekolah"
                ],
                answer: 0,
                explanation: "Gaya hidup modern yang cenderung individualistis dapat memudarkan nilai kebersamaan dan tradisi lokal pada generasi muda."
            },
            {
                type: "Konsep Sosiologi",
                question: "Kemampuan kebudayaan lokal dalam menyerap dan mengolah budaya asing yang masuk tanpa kehilangan identitas aslinya disebut...",
                options: [
                    "Asimilasi mutlak",
                    "Local Genius (Kearifan Lokal)",
                    "Amalgamasi",
                    "Enkulturasi Paksa"
                ],
                answer: 1,
                explanation: "Local genius adalah daya tahan dan daya cipta budaya lokal untuk menyaring unsur luar agar selaras dengan tradisi asli."
            },
            {
                type: "Sebab-Akibat",
                question: "Pemberdayaan masyarakat berbasis kearifan lokal dinilai lebih berhasil daripada program berdasar instruksi atas (top-down). Mengapa?",
                options: [
                    "Karena masyarakat merasa dihargai dan program sesuai dengan kebutuhan riil setempat",
                    "Karena kearifan lokal tidak memerlukan dana sama sekali",
                    "Karena pemerintah tidak perlu mengawasi pelaksanaan program",
                    "Karena masyarakat desa menolak teknologi modern"
                ],
                answer: 0,
                explanation: "Pendekatan partisipatif berakar lokal menciptakan rasa kepemilikan (sense of belonging) yang tinggi pada masyarakat."
            }
        ]
    },
    {
        id: 5,
        title: "Pemberdayaan Komunitas",
        icon: "fa-people-roof",
        desc: "Merancang strategi pemecahan masalah masyarakat.",
        questions: [
            {
                type: "Studi Kasus",
                question: "Sebuah desa nelayan sering mengalami kesulitan ekonomi saat musim barat. Strategi pemberdayaan komunitas yang tepat dan berkelanjutan adalah...",
                options: [
                    "Memberikan bantuan sembako setiap minggu tanpa batas waktu",
                    "Pelatihan pengolahan hasil laut menjadi produk kemasan bernilai jual tinggi",
                    "Menyarankan seluruh nelayan alih profesi menjadi buruh pabrik kota",
                    "Membangun dermaga mewah untuk kapal pesiar asing"
                ],
                answer: 1,
                explanation: "Pemberdayaan berkelanjutan memberikan keterampilan (capacity building) agar masyarakat mandiri secara ekonomi dalam jangka panjang."
            },
            {
                type: "Analisis Peran",
                question: "Dalam program pemberdayaan, peran pihak eksternal (LSM/Pemerintah) seharusnya bertindak sebagai...",
                options: [
                    "Fasilitator dan pendamping, bukan penentu tunggal",
                    "Pemilik proyek yang mengontrol seluruh keputusan",
                    "Penonton yang tidak ikut campur sama sekali",
                    "Pihak yang mengambil seluruh keuntungan usaha"
                ],
                answer: 0,
                explanation: "Fasilitator bertugas memicu potensi internal (enabling) masyarakat agar mereka menjadi agen perubahan bagi diri sendiri."
            },
            {
                type: "Situasi Sehari-hari",
                question: "Pemuda karang taruna memanfaatkan sampah plastik warga menjadi barang kerajinan daur ulang. Kegiatan ini merupakan contoh pemberdayaan berbasis...",
                options: [
                    "Ketergantungan modal asing",
                    "Pengelolaan potensi lingkungan dan kemandirian lokal",
                    "Eksploitasi tenaga kerja muda",
                    "Instruksi langsung dari luar negeri"
                ],
                answer: 1,
                explanation: "Memanfaatkan sampah lokal menjadi barang ekonomis adalah bentuk kemandirian berbasis potensi lingkungan sekitar."
            },
            {
                type: "Sebab-Akibat",
                question: "Program pemberdayaan sering mengalami kegagalan (unsuccessful). Penyebab utamanya adalah...",
                options: [
                    "Mengabaikan partisipasi pasif masyarakat",
                    "Program bersifat 'top-down' tanpa melibatkan analisis kebutuhan warga lokal",
                    "Masyarakat terlalu pintar mengelola dana",
                    "Waktu pelaksanaan yang terlalu cepat selesai"
                ],
                answer: 1,
                explanation: "Pendekatan top-down yang memaksakan kehendak luar tanpa mendengar aspirasi warga sering kali tidak tepat sasaran."
            },
            {
                type: "Tahapan Evaluasi",
                question: "Indikator utama yang menunjukkan bahwa suatu komunitas telah 'BERDAYA' adalah...",
                options: [
                    "Masyarakat terus tergantung pada donatur",
                    "Mampu mengidentifikasi masalah dan memecahkannya secara mandiri",
                    "Menolak segala bentuk kerjasama eksternal",
                    "Telah meninggalkan seluruh tradisi leluhur"
                ],
                answer: 1,
                explanation: "Kemandirian dalam mengambil keputusan dan menyelesaikan masalah internal merupakan puncak keberhasilan pemberdayaan."
            }
        ]
    },
    {
        id: 6,
        title: "Penelitian Sosial",
        icon: "fa-magnifying-glass-chart",
        desc: "Menguasai metode, data, & analisis penelitian sosiologi.",
        questions: [
            {
                type: "Metodologi",
                question: "Seorang peneliti ingin memahami mendalam perasaan dan pengalaman korban perundungan (bullying). Metode penelitian yang paling cocok digunakan adalah...",
                options: [
                    "Kuantitatif dengan kuesioner tertutup",
                    "Kualitatif dengan wawancara mendalam (indepth interview)",
                    "Eksperimen laboratorium mutlak",
                    "Survei statistik skala besar"
                ],
                answer: 1,
                explanation: "Metode kualitatif berfokus pada kedalaman makna, subjektivitas, dan pengalaman emosional partisipan."
            },
            {
                type: "Analisis Variabel",
                question: "Judul penelitian: 'Pengaruh Frekuensi Bermain Game Online terhadap Konsentrasi Belajar Siswa Kelas 12'. Variabel BEBAS (Independen) penelitian ini adalah...",
                options: [
                    "Siswa Kelas 12",
                    "Konsentrasi Belajar",
                    "Frekuensi Bermain Game Online",
                    "Hasil Ujian Sekolah"
                ],
                answer: 2,
                explanation: "Variabel bebas (independen) adalah variabel yang mempengaruhi atau menjadi penyebab timbulnya variabel terikat."
            },
            {
                type: "Pengumpulan Data",
                question: "Peneliti hadir langsung di tengah masyarakat suku terasing dan ikut serta dalam aktivitas harian mereka selama 3 bulan. Teknik ini dinamakan...",
                options: [
                    "Observasi Partisipatif",
                    "Studi Dokumentasi",
                    "Wawancara Terstruktur",
                    "Angket Terbuka"
                ],
                answer: 0,
                explanation: "Observasi partisipatif dilakukan dengan peneliti melebur ke dalam lingkungan subjek yang diteliti."
            },
            {
                type: "Pengolahan Data",
                question: "Data statistik angka persentase tingkat pengangguran paling tepat disajikan dalam bentuk...",
                options: [
                    "Narasi deskriptif kualitatif",
                    "Tabel frekuensi dan diagram batang/lingkaran",
                    "Transkrip percakapan",
                    "Catatan lapangan (field notes)"
                ],
                answer: 1,
                explanation: "Data kuantitatif berupa angka disajikan dalam bentuk visual tabel atau grafik agar mudah dibaca keterhubungannya."
            },
            {
                type: "Etika Penelitian",
                question: "Peneliti wajib menyamarkan identitas asli (nama) dari para informan dalam laporan penelitiannya. Hal ini mematuhi prinsip etika...",
                options: [
                    "Otonomi finansial",
                    "Kerahasiaan dan Anonimitas (Anonymity)",
                    "Publisitas terbuka",
                    "Subjektivitas Peneliti"
                ],
                answer: 1,
                explanation: "Anonimitas melindungi keamanan, privasi, dan kenyamanan narasumber/informan dari dampak penulisan penelitian."
            }
        ]
    }
];

let gameState = {
    playerName: "Gemini",
    currentLevelIndex: 0,
    currentQuestionIndex: 0,
    score: 0,
    lives: 3,
    timer: 25,
    timerInterval: null,
    totalCorrect: 0,
    totalWrong: 0,
    startTime: null,
    endTime: null,
    unlockedLevels: [true, false, false, false, false, false],
    isMuted: false
};

const AudioContext = typeof window !== 'undefined' ? (window.AudioContext || window.webkitAudioContext) : null;
let audioCtx = null;

function playSound(type) {
    if (gameState.isMuted || !AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();

    const now = audioCtx.currentTime;

    if (type === 'click') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
    } 
    else if (type === 'correct') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            gain.gain.setValueAtTime(0.12, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.2);
        });
    } 
    else if (type === 'wrong') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.setValueAtTime(110, now + 0.15);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);

        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
    } 
    else if (type === 'clap') {
        for (let i = 0; i < 25; i++) {
            const delay = Math.random() * 1.2;
            const bufferSize = audioCtx.sampleRate * 0.05;
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let j = 0; j < bufferSize; j++) {
                data[j] = Math.random() * 2 - 1;
            }
            const noise = audioCtx.createBufferSource();
            noise.buffer = buffer;
            const filter = audioCtx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 1000 + Math.random() * 800;
            const gain = audioCtx.createGain();
            gain.gain.setValueAtTime(0.08, now + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.05);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);
            noise.start(now + delay);
        }
    }
}

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        checkSavedGame();
    });
}

function checkSavedGame() {
    if (typeof localStorage === 'undefined') return;
    const savedData = localStorage.getItem('sociology_mission_save');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            if (parsed && parsed.playerName) {
                document.getElementById('resume-container').classList.remove('hidden');
                document.getElementById('saved-name').innerText = parsed.playerName;
            }
        } catch (e) {
            console.error("Gagal membaca save data:", e);
        }
    }
}

function saveProgress() {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem('sociology_mission_save', JSON.stringify({
        playerName: gameState.playerName,
        score: gameState.score,
        unlockedLevels: gameState.unlockedLevels,
        totalCorrect: gameState.totalCorrect,
        totalWrong: gameState.totalWrong
    }));
}

let modalCallback = null;

function showModal(title, message, mascot = "🥳✨", callback = null) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal-mascot').innerText = mascot;
    document.getElementById('custom-modal').classList.remove('hidden');
    modalCallback = callback;
}

function closeModal() {
    playSound('click');
    document.getElementById('custom-modal').classList.add('hidden');
    if (modalCallback) {
        modalCallback();
        modalCallback = null;
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('player-name-input').value.trim();
    if (!nameInput) {
        showModal("Eits!", "Masukkan namamu terlebih dahulu ya!", "🤖❓");
        return;
    }

    gameState.playerName = nameInput;
    gameState.startTime = new Date();
    saveProgress();
    
    playSound('click');
    showDashboard();
}

function resumeGame() {
    if (typeof localStorage === 'undefined') return;
    const savedData = JSON.parse(localStorage.getItem('sociology_mission_save'));
    if (savedData) {
        gameState.playerName = savedData.playerName;
        gameState.score = savedData.score || 0;
        gameState.unlockedLevels = savedData.unlockedLevels || [true, false, false, false, false, false];
        gameState.totalCorrect = savedData.totalCorrect || 0;
        gameState.totalWrong = savedData.totalWrong || 0;
        gameState.startTime = new Date();
        playSound('click');
        showDashboard();
    }
}

function showDashboard() {
    document.getElementById('display-name').innerText = gameState.playerName;
    const scoreElem = document.getElementById('total-score-display');
    if (scoreElem) scoreElem.innerText = gameState.score;
    renderLevels();
    showScreen('dashboard-screen');
}

function renderLevels() {
    const grid = document.getElementById('level-grid');
    grid.innerHTML = '';

    levelData.forEach((lvl, idx) => {
        const isUnlocked = gameState.unlockedLevels[idx];
        const card = document.createElement('div');
        card.className = `level-card ${isUnlocked ? '' : 'locked'}`;
        card.onclick = () => {
            if (isUnlocked) startMission(idx);
            else showModal("Misi Terkunci", "Selesaikan misi sebelumnya dulu yuk!", "🔒🌸");
        };

        card.innerHTML = `
            ${!isUnlocked ? '<div class="lock-badge"><i class="fas fa-lock"></i></div>' : ''}
            <div class="level-icon"><i class="fas ${lvl.icon}"></i></div>
            <h3>Misi ${lvl.id}: ${lvl.title}</h3>
            <p>${lvl.desc}</p>
        `;
        grid.appendChild(card);
    });
}

function startMission(levelIndex) {
    playSound('click');
    gameState.currentLevelIndex = levelIndex;
    gameState.currentQuestionIndex = 0;
    gameState.lives = 3;

    showScreen('game-screen');
    loadQuestion();
}

function loadQuestion() {
    const currentMission = levelData[gameState.currentLevelIndex];
    const q = currentMission.questions[gameState.currentQuestionIndex];

    document.getElementById('current-mission-title').innerText = `Misi ${currentMission.id}: ${currentMission.title}`;
    document.getElementById('lives-count').innerText = gameState.lives;
    
    const scoreElem = document.getElementById('total-score-display');
    if (scoreElem) scoreElem.innerText = gameState.score;

    document.getElementById('question-number-badge').innerText = `Soal ${gameState.currentQuestionIndex + 1}/${currentMission.questions.length}`;
    document.getElementById('question-type-badge').innerText = q.type;
    document.getElementById('question-text').innerText = q.question;

    const progressPercent = (gameState.currentQuestionIndex / currentMission.questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<b style="margin-right:8px;">${String.fromCharCode(65 + idx)}.</b> ${opt}`;
        btn.onclick = () => checkAnswer(idx);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('feedback-panel').classList.add('hidden');
    startTimer();
}

function startTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timer = 25;
    document.getElementById('timer-display').innerText = gameState.timer;

    gameState.timerInterval = setInterval(() => {
        gameState.timer--;
        document.getElementById('timer-display').innerText = gameState.timer;

        if (gameState.timer <= 0) {
            clearInterval(gameState.timerInterval);
            timeOut();
        }
    }, 1000);
}

function timeOut() {
    playSound('wrong');
    gameState.lives--;
    gameState.totalWrong++;
    document.getElementById('lives-count').innerText = gameState.lives;

    showFeedback(false, "Waktu Habis! Jangan panik, fokus ke soal berikutnya ya!");
}

function checkAnswer(selectedIndex) {
    clearInterval(gameState.timerInterval);
    const q = levelData[gameState.currentLevelIndex].questions[gameState.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === q.answer) {
        playSound('correct');
        buttons[selectedIndex].classList.add('correct');
        
        const timeBonus = gameState.timer * 4;
        const earnedScore = 100 + timeBonus;
        gameState.score += earnedScore;
        gameState.totalCorrect++;

        showFeedback(true, q.explanation, earnedScore);
    } else {
        playSound('wrong');
        buttons[selectedIndex].classList.add('wrong');
        buttons[q.answer].classList.add('correct');
        
        gameState.lives--;
        gameState.totalWrong++;
        showFeedback(false, q.explanation);
    }

    document.getElementById('lives-count').innerText = gameState.lives;
    saveProgress();
}

function showFeedback(isCorrect, explanation, scoreGained = 0) {
    const panel = document.getElementById('feedback-panel');
    const icon = document.getElementById('feedback-icon');
    const title = document.getElementById('feedback-title');
    const text = document.getElementById('feedback-explanation');

    panel.classList.remove('hidden', 'correct-bg', 'wrong-bg');

    if (isCorrect) {
        panel.classList.add('correct-bg');
        icon.className = "fas fa-check-circle color-green";
        title.innerText = `Jawaban Benar! (+${scoreGained} Pts)`;
        title.className = "color-green";
    } else {
        panel.classList.add('wrong-bg');
        icon.className = "fas fa-times-circle color-red";
        title.innerText = "Jawaban Kurang Tepat!";
        title.className = "color-red";
    }

    text.innerText = explanation;
}

function nextQuestion() {
    playSound('click');
    const currentMission = levelData[gameState.currentLevelIndex];

    if (gameState.lives <= 0) {
        showModal("Sesi Berakhir", "Nyawamu habis! Mari coba lagi dari Dashboard.", "🥺💔", () => {
            showDashboard();
        });
        return;
    }

    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex < currentMission.questions.length) {
        loadQuestion();
    } else {
        completeMission();
    }
}

function completeMission() {
    playSound('clap');
    
    if (gameState.currentLevelIndex + 1 < levelData.length) {
        gameState.unlockedLevels[gameState.currentLevelIndex + 1] = true;
        saveProgress();
        showModal(
            "Selamat! Misi Selesai 🎉", 
            `Kamu berhasil menyelesaikan Misi ${gameState.currentLevelIndex + 1}! Misi berikutnya telah terbuka.`, 
            "👏💖", 
            () => { showDashboard(); }
        );
    } else {
        finishGame();
    }
}

function exitToDashboard() {
    clearInterval(gameState.timerInterval);
    playSound('click');
    showDashboard();
}

function finishGame() {
    gameState.endTime = new Date();
    playSound('clap');
    showScreen('result-screen');

    const totalQuestionsPlayed = gameState.totalCorrect + gameState.totalWrong;
    const accuracy = totalQuestionsPlayed > 0 ? Math.round((gameState.totalCorrect / totalQuestionsPlayed) * 100) : 0;

    const timeDiffSeconds = Math.floor((gameState.endTime - gameState.startTime) / 1000);
    const minutes = Math.floor(timeDiffSeconds / 60);
    const seconds = timeDiffSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const completedLevelsCount = gameState.unlockedLevels.filter(Boolean).length;

    let category = "";
    let motivation = "";

    if (accuracy >= 85) {
        category = "MASTER SOCIAL INVESTIGATOR";
        motivation = "Luar Biasa! Pemahaman Sosiologimu sangat tajam. Kamu siap meraih nilai sempurna di Ujian Sekolah!";
    } else if (accuracy >= 70) {
        category = "DETEKTIF SOSIAL SENIOR";
        motivation = "Kerja bagus! Kamu memiliki analisis sosial yang kuat. Tingkatkan sedikit lagi pemahaman konsepmu!";
    } else {
        category = "INVESTIGATOR MUDA";
        motivation = "Usaha yang baik! Tetap semangat memperdalam materi Sosiologi. Coba lagi untuk hasil maksimal!";
    }

    document.getElementById('report-name').innerText = gameState.playerName;
    document.getElementById('report-score').innerText = gameState.score;
    document.getElementById('report-accuracy').innerText = `${accuracy}%`;
    document.getElementById('report-correct').innerText = gameState.totalCorrect;
    document.getElementById('report-wrong').innerText = gameState.totalWrong;
    document.getElementById('report-time').innerText = formattedTime;
    document.getElementById('report-levels').innerText = `${completedLevelsCount} / 6`;
    document.getElementById('result-category').innerText = category;
    document.getElementById('report-motivation').innerText = motivation;
}

function restartGame() {
    playSound('click');
    gameState.score = 0;
    gameState.totalCorrect = 0;
    gameState.totalWrong = 0;
    gameState.unlockedLevels = [true, false, false, false, false, false];
    saveProgress();
    showDashboard();
}

function downloadReport() {
    playSound('click');
    const element = document.getElementById('report-card');
    
    if (typeof html2pdf !== 'undefined') {
        const opt = {
            margin:       0.5,
            filename:     `Laporan_Sosiologi_${gameState.playerName.replace(/\s+/g, '_')}.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, backgroundColor: '#ffe5ec' },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    } else {
        showModal("Info", "Fitur PDF aktif saat dibuka dari browser ya!", "📄🌸");
    }
}

function toggleMute() {
    gameState.isMuted = !gameState.isMuted;
    const icon = document.getElementById('mute-icon');
    if (gameState.isMuted) {
        icon.className = "fas fa-volume-mute";
    } else {
        icon.className = "fas fa-volume-up";
        playSound('click');
    }
}

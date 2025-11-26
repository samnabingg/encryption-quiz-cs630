// app.js - Symmetrical vs Asymmetrical Encryption Course
(() => {
  // --- Data: 10 lessons focused on Symmetrical and Asymmetrical Encryption ---
  const LESSONS = [
    {
      id: 1,
      title: 'Introduction: Two Types of Encryption',
      content: `<p><strong>The Fundamental Question:</strong> How do we securely share information? Encryption provides the answer, and there are two main approaches: <strong>symmetrical encryption</strong> and <strong>asymmetrical encryption</strong>.</p>
                
                <p><strong>What is Encryption?</strong> Encryption transforms readable data (plaintext) into unreadable data (ciphertext) using mathematical algorithms and keys. The key determines how the transformation happens.</p>
                
                <div class="example-box">
                  <h4>The Two Approaches</h4>
                  <p><strong>Symmetrical Encryption:</strong> Uses ONE key for both locking and unlocking</p>
                  <p><strong>Asymmetrical Encryption:</strong> Uses TWO keys - one for locking, another for unlocking</p>
                </div>
                
                <p><strong>The Key Difference:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                  <tr style="background: var(--light-teal);">
                    <th style="padding:8px; border:1px solid #ddd;">Aspect</th>
                    <th style="padding:8px; border:1px solid #ddd;">Symmetrical</th>
                    <th style="padding:8px; border:1px solid #ddd;">Asymmetrical</th>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Number of Keys</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">1 (shared secret)</td>
                    <td style="padding:8px; border:1px solid #ddd;">2 (public & private pair)</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Speed</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">Fast</td>
                    <td style="padding:8px; border:1px solid #ddd;">Slower</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Key Distribution</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">Difficult</td>
                    <td style="padding:8px; border:1px solid #ddd;">Easy </td>
                  </tr>
                </table>
                
                <p><strong>Real-World Analogy:</strong></p>
                <ul>
                  <li><strong>Symmetrical:</strong> Like a padlock with two identical keys. Alice and Bob each have a copy of the same key.</li>
                  <li><strong>Asymmetrical:</strong> Like a mailbox. Anyone can drop letters in the slot (public key), but only you have the key to open it (private key).</li>
                </ul>
                
                <div class="example-box">
                  <h4>History & Context</h4>
                  <p>For thousands of years, only symmetrical encryption existed (Caesar cipher, Enigma machine). The problem? How do you securely share the key?</p>
                  <p>In 1976, Whitfield Diffie and Martin Hellman revolutionized cryptography by inventing asymmetrical encryption, solving the key distribution problem!</p>
                </div>
                
                <p><strong>Why We Need Both:</strong> Modern systems use BOTH types! Asymmetrical encryption securely shares a symmetrical key, then symmetrical encryption handles the actual data. Best of both worlds! 🎯</p>`,
      quiz: [
        { q: 'How many keys does symmetrical encryption use?', options: ['One', 'Two', 'Three'], a: 'One' },
        { q: 'Which encryption type is faster?', options: ['Symmetrical', 'Asymmetrical', 'Both same speed'], a: 'Symmetrical' },
        { q: 'Asymmetrical encryption was invented to solve what problem?', options: ['Speed issues', 'Key distribution', 'Data compression'], a: 'Key distribution' }
      ]
    },

    {
      id: 2,
      title: 'Symmetrical Encryption Deep Dive',
      content: `<p><strong>How Symmetrical Encryption Works:</strong> One secret key is used for BOTH encryption and decryption. If Alice wants to send Bob a message, they must first agree on a shared secret key. Then:</p>
                
                <ol>
                  <li>Alice encrypts the message using the shared key</li>
                  <li>Alice sends the encrypted message (safe to send over insecure channels)</li>
                  <li>Bob receives and decrypts using the SAME shared key</li>
                  <li>Only those with the key can read the message</li>
                </ol>
                
                <div class="example-box">
                  <h4>Simple Example: XOR Cipher</h4>
                  <p><strong>Shared Key:</strong> <code>1100</code> (binary)</p>
                  <p><strong>Encryption:</strong></p>
                  <p>Plaintext: <code>1010</code> XOR Key: <code>1100</code> = Ciphertext: <code>0110</code></p>
                  <p><strong>Decryption:</strong></p>
                  <p>Ciphertext: <code>0110</code> XOR Key: <code>1100</code> = Plaintext: <code>1010</code> ✅</p>
                </div>
                
                <p><strong>Popular Symmetrical Algorithms:</strong></p>
                <ul>
                  <li><strong>AES (Advanced Encryption Standard):</strong> The gold standard today. Used by governments, banks, everyone. Key sizes: 128, 192, 256 bits</li>
                  <li><strong>DES (Data Encryption Standard):</strong> Old algorithm from 1970s. Now INSECURE (56-bit key broken in 1999)</li>
                  <li><strong>3DES (Triple DES):</strong> Applies DES three times. More secure than DES but slower than AES</li>
                  <li><strong>Blowfish:</strong> Fast, flexible key length (32-448 bits)</li>
                  <li><strong>ChaCha20:</strong> Modern stream cipher, very fast on mobile devices</li>
                </ul>
                
                <div class="example-box">
                  <h4>Advantages of Symmetrical Encryption</h4>
                  <ul>
                    <li><strong>Speed:</strong> VERY fast - can encrypt gigabytes per second</li>
                    <li><strong>Efficiency:</strong> Less computationally intensive</li>
                    <li><strong>Simple:</strong> Easier to implement correctly</li>
                    <li><strong>Perfect for bulk data:</strong> Files, databases, disk encryption</li>
                  </ul>
                </div>
                
                <div class="example-box">
                  <h4>Disadvantages of Symmetrical Encryption</h4>
                  <ul>
                    <li><strong>Key Distribution Problem:</strong> How do you securely share the key initially? Can't send it over insecure channel!</li>
                    <li><strong>Scalability:</strong> Need unique key for every pair (10 people = 45 different keys!)</li>
                    <li><strong>Key Management:</strong> Must securely store all keys</li>
                    <li><strong>No Authentication:</strong> Doesn't prove WHO sent the message</li>
                  </ul>
                </div>
                
                <p><strong>Where Symmetrical Encryption is Used:</strong></p>
                <ul>
                  <li><strong>Full disk encryption:</strong> BitLocker, FileVault (AES-256)</li>
                  <li><strong>File encryption:</strong> Encrypting documents and archives</li>
                  <li><strong>VPNs:</strong> Securing tunnel traffic (AES-GCM)</li>
                  <li><strong>Messaging:</strong> Signal uses AES-256 for message content</li>
                  <li><strong>HTTPS:</strong> After key exchange, AES encrypts the web traffic</li>
                  <li><strong>Database encryption:</strong> Protecting stored data</li>
                </ul>
                
                <p><strong>The Key Exchange Challenge:</strong> The biggest weakness of symmetrical encryption is: <em>How do Alice and Bob agree on the secret key without meeting in person?</em> This is where asymmetrical encryption comes to the rescue! 🦸</p>`,
      quiz: [
        { q: 'In symmetrical encryption, encryption and decryption use:', options: ['Different keys', 'The same key', 'No keys'], a: 'The same key' },
        { q: 'Which is the most widely used symmetrical algorithm today?', options: ['DES', 'AES', 'RSA'], a: 'AES' },
        { q: 'The main problem with symmetrical encryption is:', options: ['It\'s too slow', 'Key distribution', 'It\'s too secure'], a: 'Key distribution' }
      ]
    },

    {
      id: 3,
      title: 'Asymmetrical Encryption Deep Dive',
      content: `<p><strong>How Asymmetrical Encryption Works:</strong> Also called "public-key cryptography," this uses a mathematically linked pair of keys:</p>
                <ul>
                  <li><strong>Public Key:</strong> Shared with everyone, used for ENCRYPTION</li>
                  <li><strong>Private Key:</strong> Kept secret, used for DECRYPTION</li>
                </ul>
                
                <p><strong>The Magic:</strong> What one key encrypts, only the other key can decrypt! Data encrypted with the public key can ONLY be decrypted with the matching private key.</p>
                
                <div class="example-box">
                  <h4>Communication Flow</h4>
                  <p><strong>Scenario:</strong> Alice wants to send Bob a secret message</p>
                  <ol>
                    <li><strong>Bob generates</strong> a key pair (public + private)</li>
                    <li><strong>Bob shares</strong> his public key with Alice (and the world - it's safe!)</li>
                    <li><strong>Alice encrypts</strong> her message using Bob's public key</li>
                    <li><strong>Alice sends</strong> the encrypted message (safe even if intercepted)</li>
                    <li><strong>Bob decrypts</strong> with his private key (only he has it!)</li>
                  </ol>
                  <p>No need to share secrets beforehand!</p>
                </div>
                
                <p><strong>Real-World Analogy:</strong> Bob has a mailbox in a public place. Anyone can put letters in the slot (public key = mail slot). But only Bob has the key to open the mailbox and read the letters (private key = mailbox key).</p>
                
                <p><strong>Popular Asymmetrical Algorithms:</strong></p>
                <ul>
                  <li><strong>RSA (Rivest-Shamir-Adleman):</strong> Most famous and widely used. Based on prime factorization. Key sizes: 2048-4096 bits</li>
                  <li><strong>ECC (Elliptic Curve Cryptography):</strong> Modern, efficient. Smaller keys for same security (256-bit ECC ≈ 3072-bit RSA)</li>
                  <li><strong>DSA (Digital Signature Algorithm):</strong> Mainly for signatures</li>
                  <li><strong>ElGamal:</strong> Based on discrete logarithm problem</li>
                  <li><strong>Ed25519:</strong> Modern, fast ECC variant. Used by Signal, SSH</li>
                </ul>
                
                <div class="example-box">
                  <h4>Advantages of Asymmetrical Encryption</h4>
                  <ul>
                    <li><strong>Solves Key Distribution:</strong> No need to share secrets beforehand!</li>
                    <li><strong>Scalability:</strong> Each person needs only ONE key pair (1000 people = 1000 key pairs, not millions!)</li>
                    <li><strong>Authentication:</strong> Can verify WHO sent the message (digital signatures)</li>
                    <li><strong>Non-repudiation:</strong> Sender can't deny sending the message</li>
                    <li><strong>Public keys are safe:</strong> Can be shared openly without risk</li>
                  </ul>
                </div>
                
                <div class="example-box">
                  <h4>Disadvantages of Asymmetrical Encryption</h4>
                  <ul>
                    <li><strong>Slow:</strong> 100-1000x slower than symmetrical encryption</li>
                    <li><strong>Computationally expensive:</strong> Requires lots of processing power</li>
                    <li><strong>Larger keys:</strong> Need 2048+ bit keys vs 256-bit symmetrical</li>
                    <li><strong>Not practical for bulk data:</strong> Too slow for encrypting large files</li>
                    <li><strong>Complex math:</strong> Harder to implement securely</li>
                  </ul>
                </div>
                
                <p><strong>Where Asymmetrical Encryption is Used:</strong></p>
                <ul>
                  <li><strong>SSL/TLS (HTTPS):</strong> Secure key exchange during handshake</li>
                  <li><strong>Digital Signatures:</strong> Email (S/MIME, PGP), code signing</li>
                  <li><strong>Certificates:</strong> X.509 certificates prove identity</li>
                  <li><strong>SSH:</strong> Secure remote login</li>
                  <li><strong>Cryptocurrencies:</strong> Bitcoin, Ethereum use asymmetric signatures</li>
                  <li><strong>Email Encryption:</strong> PGP/GPG for end-to-end email security</li>
                </ul>
                
                <p><strong>Key Concept - Digital Signatures:</strong> Asymmetrical encryption can also work in reverse! If Bob encrypts with his PRIVATE key, anyone can decrypt with his PUBLIC key. This proves Bob sent it! This is how digital signatures work. 🖊️</p>`,
      quiz: [
        { q: 'How many keys does asymmetrical encryption use?', options: ['One', 'Two', 'Three'], a: 'Two' },
        { q: 'Which key is used to encrypt in asymmetrical encryption?', options: ['Private key', 'Public key', 'Both keys'], a: 'Public key' },
        { q: 'Compared to symmetrical encryption, asymmetrical is:', options: ['Faster', 'Slower', 'Same speed'], a: 'Slower' }
      ]
    },

    {
      id: 4,
      title: 'Comparing Symmetrical vs Asymmetrical',
      content: `<p><strong>The Complete Comparison:</strong> Let's put symmetrical and asymmetrical encryption side by side to understand when to use each.</p>
                
                <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                  <tr style="background: var(--dark-blue); color: white;">
                    <th style="padding:10px; border:1px solid #ddd;">Feature</th>
                    <th style="padding:10px; border:1px solid #ddd;">Symmetrical</th>
                    <th style="padding:10px; border:1px solid #ddd;">Asymmetrical</th>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Number of Keys</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">1 shared secret key</td>
                    <td style="padding:8px; border:1px solid #ddd;">2 keys (public + private)</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Key Distribution</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">Difficult - must share securely</td>
                    <td style="padding:8px; border:1px solid #ddd;">Easy - public key can be shared openly</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Speed</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">Very fast (GB/sec)</td>
                    <td style="padding:8px; border:1px solid #ddd;">Slow (100-1000x slower)</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Key Length</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">Small (128-256 bits)</td>
                    <td style="padding:8px; border:1px solid #ddd;">Large (2048-4096 bits)</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Scalability</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">Poor (n² keys for n users)</td>
                    <td style="padding:8px; border:1px solid #ddd;">Good (n key pairs for n users)</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Authentication</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">No built-in authentication</td>
                    <td style="padding:8px; border:1px solid #ddd;">Yes (digital signatures)</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Best For</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">Bulk data encryption</td>
                    <td style="padding:8px; border:1px solid #ddd;">Key exchange, signatures, identity</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Examples</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">AES, DES, ChaCha20</td>
                    <td style="padding:8px; border:1px solid #ddd;">RSA, ECC, Ed25519</td>
                  </tr>
                </table>
                
                <div class="example-box">
                  <h4>Use Case Decision Tree</h4>
                  <p><strong>Use Symmetrical When:</strong></p>
                  <ul>
                    <li>Encrypting files/databases (you control both encryption & decryption)</li>
                    <li>Full disk encryption (single user scenario)</li>
                    <li>Need maximum speed</li>
                    <li>Already have a secure way to share the key</li>
                    <li>Encrypting message content (after key exchange)</li>
                  </ul>
                  
                  <p><strong>Use Asymmetrical When:</strong></p>
                  <ul>
                    <li>No prior secure channel exists</li>
                    <li>Need digital signatures</li>
                    <li>Identity verification required</li>
                    <li>Exchanging symmetrical keys</li>
                    <li>Email encryption (sender/receiver don't share secret)</li>
                  </ul>
                </div>
                
                <p><strong>The Scalability Problem Visualized:</strong></p>
                <ul>
                  <li><strong>Symmetrical:</strong> 10 people need 45 unique keys | 100 people need 4,950 keys! 😱</li>
                  <li><strong>Asymmetrical:</strong> 10 people need 10 key pairs | 100 people need 100 key pairs! 😊</li>
                </ul>
                
                <div class="example-box">
                  <h4>Real-World Example: Online Banking</h4>
                  <p><strong>When you access your bank:</strong></p>
                  <ol>
                    <li>Bank sends its public key (asymmetrical)</li>
                    <li>Your browser generates a random symmetrical key</li>
                    <li>Browser encrypts that key using bank's public key (asymmetrical)</li>
                    <li>Sends encrypted symmetrical key to bank</li>
                    <li>Bank decrypts with its private key (asymmetrical)</li>
                    <li>All transaction data encrypted with symmetrical key (fast!)</li>
                  </ol>
                  <p>Best of both worlds: Security of asymmetrical + Speed of symmetrical!</p>
                </div>
                
                <p><strong>The Hybrid Approach:</strong> Modern systems almost ALWAYS use both types together. This is called "hybrid cryptography" and it's the standard approach in TLS/SSL, PGP, Signal, and virtually all secure communications.</p>`,
      quiz: [
        { q: 'Which is faster for encrypting large files?', options: ['Symmetrical', 'Asymmetrical', 'Both same'], a: 'Symmetrical' },
        { q: 'Which solves the key distribution problem?', options: ['Symmetrical', 'Asymmetrical', 'Neither'], a: 'Asymmetrical' },
        { q: 'Modern systems typically use:', options: ['Only symmetrical', 'Only asymmetrical', 'Both together'], a: 'Both together' }
      ]
    },

    {
      id: 5,
      title: 'AES: The King of Symmetrical Encryption',
      content: `<p><strong>What is AES?</strong> The Advanced Encryption Standard (AES) is the most trusted and widely used symmetrical encryption algorithm in the world. Adopted by the U.S. government in 2001, it's used everywhere from WiFi to disk encryption.</p>
                
                <p><strong>Why AES Won:</strong> In 1997, NIST held a competition to replace the aging DES standard. Out of 15 candidates, Rijndael (pronounced "Rhine-dahl") won and became AES. It beat competitors by being fast, secure, and efficient.</p>
                
                <div class="example-box">
                  <h4>AES Key Sizes</h4>
                  <p><strong>AES-128:</strong> 128-bit key, 10 rounds</p>
                  <ul><li>Security: 2^128 possible keys = 340 undecillion</li><li>Speed: Very fast</li><li>Use: General purpose, most common</li></ul>
                  
                  <p><strong>AES-192:</strong> 192-bit key, 12 rounds</p>
                  <ul><li>Security: Extra margin of security</li><li>Speed: Slightly slower</li><li>Use: Government, high-security</li></ul>
                  
                  <p><strong>AES-256:</strong> 256-bit key, 14 rounds</p>
                  <ul><li>Security: Maximum security level</li><li>Speed: Slowest (but still very fast)</li><li>Use: Top Secret data, long-term protection</li></ul>
                </div>
                
                <p><strong>How AES Works (Simplified):</strong> AES is a block cipher that encrypts data in 128-bit (16-byte) blocks. It uses multiple rounds of four operations:</p>
                <ol>
                  <li><strong>SubBytes:</strong> Replace each byte using a substitution table (S-box)</li>
                  <li><strong>ShiftRows:</strong> Shift rows of the data matrix left</li>
                  <li><strong>MixColumns:</strong> Mix the data in each column</li>
                  <li><strong>AddRoundKey:</strong> XOR with a round key derived from the main key</li>
                </ol>
                <p>These steps repeat 10-14 times depending on key size. Each round thoroughly scrambles the data!</p>
                
                <div class="example-box">
                  <h4>Block Cipher Modes</h4>
                  <p>To encrypt data longer than 16 bytes, we need a mode of operation:</p>
                  
                  <p><strong> ECB (Electronic Codebook):</strong> NEVER USE!</p>
                  <ul><li>Each block encrypted independently</li><li>Same plaintext = same ciphertext (leaks patterns)</li><li>Famous example: Encrypted Tux penguin still shows penguin shape!</li></ul>
                  
                  <p><strong> CBC (Cipher Block Chaining):</strong> Classic mode</p>
                  <ul><li>Each block XORed with previous ciphertext</li><li>Requires Initialization Vector (IV)</li><li>Sequential (can't parallelize)</li></ul>
                  
                  <p><strong> CTR (Counter):</strong> Stream cipher mode</p>
                  <ul><li>Turns block cipher into stream cipher</li><li>Parallelizable (faster)</li><li>Random access to encrypted data</li></ul>
                  
                  <p><strong> GCM (Galois/Counter Mode):</strong> BEST CHOICE!</p>
                  <ul><li>Encryption + authentication</li><li>Detects tampering</li><li>Very fast (parallelizable)</li><li>Standard in TLS 1.3, IPsec, SSH</li></ul>
                </div>
                
                <p><strong>AES Security Status:</strong></p>
                <ul>
                  <li> No practical attacks against properly implemented AES</li>
                  <li> Would take billions of years to brute force even with all world's computers</li>
                  <li> Even quantum computers can't break AES-256 efficiently (just use larger keys)</li>
                  <li> Implementation vulnerabilities still possible (side-channel attacks)</li>
                </ul>
                
                <div class="example-box">
                  <h4>AES in the Real World</h4>
                  <p> <strong>Disk Encryption:</strong> BitLocker (Windows), FileVault (Mac), LUKS (Linux)</p>
                  <p> <strong>Mobile:</strong> iOS and Android encrypt all storage with AES-256</p>
                  <p> <strong>Web:</strong> HTTPS uses AES-128-GCM or AES-256-GCM</p>
                  <p> <strong>Messaging:</strong> Signal, WhatsApp use AES-256</p>
                  <p> <strong>Cloud:</strong> AWS, Google Cloud, Azure use AES-256 by default</p>
                  <p> <strong>WiFi:</strong> WPA2/WPA3 use AES-CCMP</p>
                  <p> <strong>Gaming:</strong> PlayStation, Xbox encrypt game data with AES</p>
                </div>
                
                <p><strong>Hardware Acceleration:</strong> Modern CPUs have AES-NI (AES New Instructions) that make AES incredibly fast - often over 1 GB/second on laptop processors! This is why AES is the default choice for symmetrical encryption.</p>`,
      quiz: [
        { q: 'AES is an example of:', options: ['Symmetrical encryption', 'Asymmetrical encryption', 'Hash function'], a: 'Symmetrical encryption' },
        { q: 'Which AES key size provides maximum security?', options: ['AES-128', 'AES-192', 'AES-256'], a: 'AES-256' },
        { q: 'The recommended AES mode that includes authentication is:', options: ['ECB', 'CBC', 'GCM'], a: 'GCM' }
      ]
    },

    {
      id: 6,
      title: 'RSA: The King of Asymmetrical Encryption',
      content: `<p><strong>What is RSA?</strong> RSA (Rivest-Shamir-Adleman) is the most famous asymmetrical encryption algorithm. Invented in 1977, it revolutionized cryptography by making secure communication possible without sharing secrets beforehand.</p>
                
                <p><strong>The Mathematical Insight:</strong> RSA's security relies on a simple mathematical fact:</p>
                <ul>
                  <li> <strong>Easy:</strong> Multiply two large prime numbers (17 × 19 = 323)</li>
                  <li> <strong>Hard:</strong> Factor the result back into primes (323 = ? × ?)</li>
                </ul>
                <p>With 2048-bit numbers, factoring is practically impossible with current technology!</p>
                
                <div class="example-box">
                  <h4>RSA Key Generation (Simplified)</h4>
                  <ol>
                    <li>Choose two large random prime numbers: <strong>p</strong> and <strong>q</strong></li>
                    <li>Multiply them: <strong>n = p × q</strong> (this is the modulus)</li>
                    <li>Calculate: <strong>φ(n) = (p-1)(q-1)</strong></li>
                    <li>Choose public exponent: <strong>e</strong> (commonly 65537)</li>
                    <li>Calculate private exponent: <strong>d</strong> where e×d ≡ 1 (mod φ(n))</li>
                    <li><strong>Public key:</strong> (n, e)</li>
                    <li><strong>Private key:</strong> (n, d)</li>
                  </ol>
                  <p>The primes p and q are destroyed after key generation! </p>
                </div>
                
                <p><strong>How RSA Encryption Works:</strong></p>
                <ul>
                  <li><strong>Encryption:</strong> Ciphertext = Message^e mod n (using public key)</li>
                  <li><strong>Decryption:</strong> Message = Ciphertext^d mod n (using private key)</li>
                </ul>
                
                <div class="example-box">
                  <h4>Toy Example with Small Numbers</h4>
                  <p><strong>Key Generation:</strong></p>
                  <ul>
                    <li>p = 3, q = 11 → n = 33</li>
                    <li>φ(n) = (3-1)(11-1) = 20</li>
                    <li>e = 7 (public exponent)</li>
                    <li>d = 3 (private exponent, since 7×3 mod 20 = 1)</li>
                  </ul>
                  <p><strong>Public Key:</strong> (33, 7) | <strong>Private Key:</strong> (33, 3)</p>
                  
                  <p><strong>Encryption:</strong> Message = 2</p>
                  <p>Ciphertext = 2^7 mod 33 = 128 mod 33 = 29</p>
                  
                  <p><strong>Decryption:</strong></p>
                  <p>Message = 29^3 mod 33 = 24389 mod 33 = 2 </p>
                  
                  <p><em>Real RSA uses 2048+ bit numbers!</em></p>
                </div>
                
                <p><strong>RSA Key Sizes:</strong></p>
                <ul>
                  <li><strong>1024-bit:</strong>  DEPRECATED - Can be broken by well-funded attackers</li>
                  <li><strong>2048-bit:</strong>  Current standard, secure until at least 2030</li>
                  <li><strong>3072-bit:</strong>  Long-term security (equivalent to AES-128)</li>
                  <li><strong>4096-bit:</strong>  Maximum security (equivalent to AES-256)</li>
                </ul>
                
                <div class="example-box">
                  <h4>RSA vs AES Key Strength Comparison</h4>
                  <table style="width:100%; border-collapse: collapse;">
                    <tr style="background: var(--light-teal);">
                      <th style="padding:8px; border:1px solid #ddd;">Symmetrical (AES)</th>
                      <th style="padding:8px; border:1px solid #ddd;">Asymmetrical (RSA)</th>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">80-bit</td>
                      <td style="padding:8px; border:1px solid #ddd;">1024-bit</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">128-bit</td>
                      <td style="padding:8px; border:1px solid #ddd;">3072-bit</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">256-bit</td>
                      <td style="padding:8px; border:1px solid #ddd;">15360-bit</td>
                    </tr>
                  </table>
                  <p>RSA needs much larger keys for equivalent security! </p>
                </div>
                
                <p><strong>Common Uses of RSA:</strong></p>
                <ul>
                  <li> <strong>SSL/TLS:</strong> HTTPS key exchange during handshake</li>
                  <li> <strong>Digital Signatures:</strong> Email (S/MIME), code signing, documents</li>
                  <li> <strong>Key Exchange:</strong> Securely sharing symmetrical keys</li>
                  <li> <strong>Certificates:</strong> X.509 certificates for identity</li>
                  <li> <strong>Email:</strong> PGP/GPG encryption</li>
                  <li> <strong>SSH:</strong> Secure remote login</li>
                </ul>
                
                <p><strong>Why RSA is Slow:</strong> RSA operations involve raising huge numbers to huge powers and taking modulos - very computationally expensive! Typical speeds:</p>
                <ul>
                  <li>RSA-2048: ~1000 decryptions/second (vs AES: billions/second)</li>
                  <li>This is why RSA is used for small data (keys) not bulk encryption!</li>
                </ul>
                
                <div class="example-box">
                  <h4>Important: Padding is Critical!</h4>
                  <p>Never use "textbook RSA" (raw RSA)! Always use padding:</p>
                  <ul>
                    <li><strong>OAEP (Optimal Asymmetric Encryption Padding):</strong> For encryption</li>
                    <li><strong>PSS (Probabilistic Signature Scheme):</strong> For signatures</li>
                  </ul>
                  <p>Padding prevents attacks and ensures same message doesn't always produce same ciphertext!</p>
                </div>
                
                <p><strong>RSA Security Concerns:</strong></p>
                <ul>
                  <li> <strong>Quantum computers:</strong> Shor's algorithm can break RSA efficiently</li>
                  <li> <strong>Small keys:</strong> 1024-bit no longer secure</li>
                  <li> <strong>Implementation bugs:</strong> Side-channel attacks, timing attacks</li>
                  <li> <strong>Poor randomness:</strong> Weak random number generation = weak keys</li>
                </ul>
                
                <p><strong>The Future:</strong> RSA is being gradually replaced by ECC (Elliptic Curve Cryptography) which offers same security with much smaller keys. But RSA remains the most widely deployed asymmetrical algorithm today!</p>`,
      quiz: [
        { q: 'RSA is an example of:', options: ['Symmetrical encryption', 'Asymmetrical encryption', 'Hash function'], a: 'Asymmetrical encryption' },
        { q: 'RSA security is based on the difficulty of:', options: ['Prime factorization', 'Hash collisions', 'XOR operations'], a: 'Prime factorization' },
        { q: 'The current recommended RSA key size is:', options: ['1024-bit', '2048-bit', '256-bit'], a: '2048-bit' }
      ]
    },

    {
      id: 7,
      title: 'Hybrid Encryption: Best of Both Worlds',
      content: `<p><strong>The Problem:</strong> We've learned that:</p>
                <ul>
                  <li>Symmetrical encryption is FAST but has key distribution problems</li>
                  <li>Asymmetrical encryption solves key distribution but is SLOW</li>
                </ul>
                <p><strong>The Solution:</strong> Use BOTH together! This is called <strong>hybrid encryption</strong> and it's how the modern internet works.</p>
                
                <div class="example-box">
                  <h4>How Hybrid Encryption Works</h4>
                  <ol>
                    <li><strong>Generate:</strong> Create a random symmetrical key (session key)</li>
                    <li><strong>Encrypt Data:</strong> Use the fast symmetrical key to encrypt the actual message/file</li>
                    <li><strong>Encrypt Key:</strong> Use recipient's public key (asymmetrical) to encrypt the symmetrical key</li>
                    <li><strong>Send Both:</strong> Send encrypted data + encrypted key</li>
                    <li><strong>Decrypt Key:</strong> Recipient uses private key to decrypt the symmetrical key</li>
                    <li><strong>Decrypt Data:</strong> Use symmetrical key to decrypt the actual data</li>
                  </ol>
                  <p> Fast encryption + Secure key exchange!</p>
                </div>
                
                <p><strong>Visual Example: Alice Sending Bob a Large File</strong></p>
                <div class="example-box">
                  <p><strong>Alice's Side:</strong></p>
                  <ol>
                    <li>Generates random AES-256 key: <code>K_session</code></li>
                    <li>Encrypts 1GB file with AES using <code>K_session</code> → Fast! ⚡</li>
                    <li>Encrypts <code>K_session</code> with Bob's RSA public key → Small!</li>
                    <li>Sends: Encrypted file + Encrypted key</li>
                  </ol>
                  
                  <p><strong>Bob's Side:</strong></p>
                  <ol>
                    <li>Decrypts <code>K_session</code> using his RSA private key</li>
                    <li>Decrypts 1GB file using <code>K_session</code> with AES → Fast! ⚡</li>
                  </ol>
                  
                  <p> Result: Secure (asymmetrical) + Fast (symmetrical)!</p>
                </div>
                
                <p><strong>Why This is Brilliant:</strong></p>
                <ul>
                  <li> No pre-shared secrets needed (asymmetrical solves this)</li>
                  <li> Fast bulk encryption (symmetrical handles this)</li>
                  <li> Unique key per session (session key is random each time)</li>
                  <li> Perfect Forward Secrecy possible (destroy session keys)</li>
                </ul>
                
                <div class="example-box">
                  <h4>Real-World Application: HTTPS/TLS</h4>
                  <p>When you visit https://example.com:</p>
                  
                  <p><strong>1. Handshake Phase (Asymmetrical):</strong></p>
                  <ul>
                    <li>Server sends its RSA/ECC public key certificate</li>
                    <li>Browser verifies certificate authenticity</li>
                    <li>Browser generates random AES session key</li>
                    <li>Browser encrypts session key with server's public key</li>
                    <li>Server decrypts session key with private key</li>
                  </ul>
                  
                  <p><strong>2. Data Transfer Phase (Symmetrical):</strong></p>
                  <ul>
                    <li>All web traffic encrypted with AES-GCM using session key</li>
                    <li>Lightning fast! Can stream video, download files</li>
                    <li>Both sides have the same session key now</li>
                  </ul>
                  
                  <p> That padlock icon means this hybrid system is working!</p>
                </div>
                
                <p><strong>Other Systems Using Hybrid Encryption:</strong></p>
                <ul>
                  <li> <strong>PGP/GPG Email:</strong> Encrypts email with AES, encrypts AES key with recipient's RSA public key</li>
                  <li> <strong>Signal Protocol:</strong> Uses both asymmetrical (X3DH) and symmetrical (AES-256) encryption</li>
                  <li> <strong>OpenSSH:</strong> Key exchange via asymmetrical, session via symmetrical</li>
                  <li> <strong>VPNs (IPsec):</strong> IKE uses asymmetrical, data tunnel uses AES</li>
                  <li> <strong>Encrypted Backups:</strong> File encryption with AES, key encrypted with RSA</li>
                </ul>
                
                <div class="example-box">
                  <h4>Performance Comparison: 1GB File Encryption</h4>
                  <table style="width:100%; border-collapse: collapse;">
                    <tr style="background: var(--light-teal);">
                      <th style="padding:8px; border:1px solid #ddd;">Method</th>
                      <th style="padding:8px; border:1px solid #ddd;">Time</th>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Pure RSA-2048</td>
                      <td style="padding:8px; border:1px solid #ddd;">~278 hours </td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Pure AES-256</td>
                      <td style="padding:8px; border:1px solid #ddd;">~1 second </td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;"><strong>Hybrid (RSA + AES)</strong></td>
                      <td style="padding:8px; border:1px solid #ddd;"><strong>~1 second </strong></td>
                    </tr>
                  </table>
                  <p>Hybrid encryption gives us the speed of AES with the security of RSA!</p>
                </div>
                
                <p><strong>Key Takeaway:</strong> Hybrid encryption is not just a nice-to-have - it's the STANDARD approach in modern cryptography. Almost every secure system you use daily (HTTPS, email encryption, messaging apps) uses hybrid encryption!</p>`,
      quiz: [
        { q: 'Hybrid encryption combines:', options: ['Two symmetrical algorithms', 'Symmetrical and asymmetrical', 'Two asymmetrical algorithms'], a: 'Symmetrical and asymmetrical' },
        { q: 'In hybrid encryption, the bulk data is encrypted with:', options: ['Asymmetrical encryption', 'Symmetrical encryption', 'No encryption'], a: 'Symmetrical encryption' },
        { q: 'HTTPS uses hybrid encryption:', options: ['False', 'True', 'Only sometimes'], a: 'True' }
      ]
    },

    {
      id: 8,
      title: 'Key Distribution & Exchange',
      content: `<p><strong>The Core Challenge:</strong> How do two people who've never met securely agree on a secret key over a public channel? This is the key distribution problem that plagued symmetrical encryption for centuries.</p>
                
                <p><strong>Three Solutions:</strong></p>
                <ul>
                  <li> <strong>Pre-shared Keys:</strong> Meet in person, exchange keys (doesn't scale)</li>
                  <li> <strong>Asymmetrical Encryption:</strong> Use public-key crypto to share symmetrical keys</li>
                  <li> <strong>Key Exchange Protocols:</strong> Derive shared secret without sending it (Diffie-Hellman)</li>
                </ul>
                
                <div class="example-box">
                  <h4>Method 1: Using Asymmetrical Encryption for Key Distribution</h4>
                  <p>Alice wants to share an AES key with Bob:</p>
                  <ol>
                    <li>Alice generates random AES key: <code>K</code></li>
                    <li>Alice gets Bob's RSA public key</li>
                    <li>Alice encrypts <code>K</code> with Bob's public key → <code>C</code></li>
                    <li>Alice sends <code>C</code> over insecure channel (safe!)</li>
                    <li>Bob decrypts <code>C</code> with his private key → gets <code>K</code></li>
                    <li>Both now have the same AES key!</li>
                  </ol>
                  <p> Simple and secure!</p>
                </div>
                
                <p><strong>Diffie-Hellman Key Exchange:</strong> A brilliant protocol that lets two parties derive a shared secret without ever sending it! Even if someone listens to the entire conversation, they can't figure out the shared secret.</p>
                
                <div class="example-box">
                  <h4>Diffie-Hellman: The Paint Mixing Analogy</h4>
                  <ol>
                    <li><strong>Public:</strong> Alice and Bob agree on a common color (yellow) in public</li>
                    <li><strong>Secret:</strong> Alice picks secret color (red), Bob picks secret color (blue)</li>
                    <li><strong>Mix:</strong> Alice mixes yellow + red = orange; Bob mixes yellow + blue = green</li>
                    <li><strong>Exchange:</strong> They publicly exchange their mixed colors (orange and green)</li>
                    <li><strong>Mix Again:</strong> Alice mixes green + her secret red; Bob mixes orange + his secret blue</li>
                    <li><strong>Result:</strong> Both end up with the same brownish color!</li>
                    <li><strong>Eve (attacker):</strong> Only saw yellow, orange, and green. Can't figure out the final brown color!</li>
                  </ol>
                </div>
                
                <p><strong>Diffie-Hellman: The Math Version</strong></p>
                <div class="example-box">
                  <p><strong>Public Parameters:</strong> p (large prime), g (generator)</p>
                  
                  <p><strong>Alice:</strong></p>
                  <ul>
                    <li>Picks secret: a (private)</li>
                    <li>Computes: A = g^a mod p</li>
                    <li>Sends A to Bob (public)</li>
                  </ul>
                  
                  <p><strong>Bob:</strong></p>
                  <ul>
                    <li>Picks secret: b (private)</li>
                    <li>Computes: B = g^b mod p</li>
                    <li>Sends B to Alice (public)</li>
                  </ul>
                  
                  <p><strong>Shared Secret:</strong></p>
                  <ul>
                    <li>Alice computes: s = B^a mod p = (g^b)^a mod p</li>
                    <li>Bob computes: s = A^b mod p = (g^a)^b mod p</li>
                    <li>Both get the same s! </li>
                  </ul>
                  
                  <p>Attacker sees: p, g, A, B but can't compute s without knowing a or b!</p>
                </div>
                
                <p><strong>Why Diffie-Hellman is Secure:</strong> Breaking it requires solving the discrete logarithm problem - given g^a mod p, find a. With large enough numbers (2048+ bits), this is computationally infeasible.</p>
                
                <div class="example-box">
                  <h4> Critical Problem: Man-in-the-Middle Attack</h4>
                  <p>Basic Diffie-Hellman has NO authentication! Eve can intercept:</p>
                  <ol>
                    <li>Eve does DH with Alice (Alice thinks it's Bob)</li>
                    <li>Eve does separate DH with Bob (Bob thinks it's Alice)</li>
                    <li>Eve can decrypt, read, and re-encrypt all messages!</li>
                  </ol>
                  
                  <p><strong>Solutions:</strong></p>
                  <ul>
                    <li> <strong>Authenticated DH:</strong> Sign DH parameters with private keys</li>
                    <li> <strong>Certificates:</strong> Use PKI to verify identities</li>
                    <li> <strong>Pre-shared keys:</strong> Out-of-band authentication</li>
                  </ul>
                </div>
                
                <p><strong>Modern Key Exchange:</strong></p>
                <ul>
                  <li><strong>ECDHE (Elliptic Curve Diffie-Hellman Ephemeral):</strong> Modern standard in TLS 1.3</li>
                  <li><strong>Ephemeral:</strong> New keys for each session (perfect forward secrecy)</li>
                  <li><strong>X25519:</strong> Fast, secure ECC curve used by Signal, TLS, SSH</li>
                </ul>
                
                <div class="example-box">
                  <h4>Perfect Forward Secrecy (PFS)</h4>
                  <p><strong>Problem:</strong> If server's long-term private key is stolen, can attacker decrypt past traffic?</p>
                  <ul>
                    <li> <strong>Without PFS:</strong> Yes! All past sessions can be decrypted</li>
                    <li> <strong>With PFS:</strong> No! Each session used ephemeral (temporary) keys that were destroyed</li>
                  </ul>
                  <p>This is why modern protocols use DHE/ECDHE - new keys every session!</p>
                </div>
                
                <p><strong>Key Distribution in Practice:</strong></p>
                <ul>
                  <li> <strong>TLS/HTTPS:</strong> ECDHE + certificates</li>
                  <li> <strong>SSH:</strong> ECDH + public key authentication</li>
                  <li> <strong>Signal:</strong> X3DH (Extended Triple Diffie-Hellman)</li>
                  <li> <strong>VPNs:</strong> IKE (Internet Key Exchange) protocol</li>
                  <li> <strong>PGP:</strong> RSA for key exchange</li>
                </ul>`,
      quiz: [
        { q: 'Diffie-Hellman is used to:', options: ['Encrypt messages directly', 'Derive a shared secret', 'Create digital signatures'], a: 'Derive a shared secret' },
        { q: 'The main vulnerability of basic Diffie-Hellman is:', options: ['Too slow', 'No authentication', 'Weak encryption'], a: 'No authentication' },
        { q: 'Perfect Forward Secrecy means:', options: ['Past sessions stay secure even if key stolen later', 'Encryption is unbreakable', 'No keys needed'], a: 'Past sessions stay secure even if key stolen later' }
      ]
    },

    {
      id: 9,
      title: 'Attacks on Symmetrical vs Asymmetrical',
      content: `<p><strong>Understanding Vulnerabilities:</strong> Both encryption types face different attack vectors. Let's explore the specific weaknesses and defenses for each.</p>
                
                <p><strong>Attacks on Symmetrical Encryption:</strong></p>
                
                <div class="example-box">
                  <h4>1. Brute Force Attack</h4>
                  <p>Try every possible key until the right one is found.</p>
                  <p><strong>Defense:</strong> Use sufficiently long keys</p>
                  <ul>
                    <li>56-bit DES:  Broken in 1999 (took 22 hours)</li>
                    <li>128-bit AES: 2^128 = 340 undecillion keys (safe for decades)</li>
                    <li>256-bit AES: Even quantum computers can't break efficiently</li>
                  </ul>
                </div>
                
                <div class="example-box">
                  <h4>2. Known Plaintext Attack</h4>
                  <p>Attacker has some plaintext-ciphertext pairs, tries to find the key.</p>
                  <p><strong>Example:</strong> WWII code breakers knew messages started with "Heil Hitler"</p>
                  <p><strong>Defense:</strong> Use strong algorithms like AES that resist these attacks</p>
                </div>
                
                <div class="example-box">
                  <h4>3. Key Reuse & IV/Nonce Reuse</h4>
                  <p><strong>Problem:</strong> Reusing keys or initialization vectors leaks information</p>
                  <p><strong>Stream cipher reuse:</strong> Reusing nonce with same key = catastrophic!</p>
                  <p>ciphertext1 XOR ciphertext2 = plaintext1 XOR plaintext2 (key cancels out!)</p>
                  <p><strong>Defense:</strong> Always use fresh random IVs/nonces for each encryption</p>
                </div>
                
                <div class="example-box">
                  <h4>4. Weak Key Storage</h4>
                  <p>Key stored insecurely (hardcoded, plain text files, weak encryption)</p>
                  <p><strong>Defense:</strong></p>
                  <ul>
                    <li>Use HSMs (Hardware Security Modules)</li>
                    <li>Key derivation functions (derive from password)</li>
                    <li>Never hardcode keys in source code!</li>
                  </ul>
                </div>
                
                <p><strong>Attacks on Asymmetrical Encryption:</strong></p>
                
                <div class="example-box">
                  <h4>1. Factorization Attacks (RSA)</h4>
                  <p>Try to factor n = p × q to recover private key</p>
                  <p><strong>Status:</strong></p>
                  <ul>
                    <li>1024-bit RSA: Factored in lab conditions</li>
                    <li>2048-bit RSA: Still secure (would take millions of years)</li>
                    <li>Quantum computers: Shor's algorithm can break RSA efficiently </li>
                  </ul>
                  <p><strong>Defense:</strong> Use 2048+ bit keys, prepare for post-quantum crypto</p>
                </div>
                
                <div class="example-box">
                  <h4>2. Small Key Attacks</h4>
                  <p>Using too-small keys makes factorization feasible</p>
                  <p><strong>Examples:</strong></p>
                  <ul>
                    <li>RSA-512: Broken in 1999</li>
                    <li>RSA-768: Broken in 2009</li>
                    <li>RSA-1024: Deprecated, no longer trusted</li>
                  </ul>
                  <p><strong>Defense:</strong> Minimum 2048-bit RSA keys</p>
                </div>
                
                <div class="example-box">
                  <h4>3. Man-in-the-Middle (MITM)</h4>
                  <p>Attacker impersonates both parties</p>
                  <ol>
                    <li>Alice tries to send Bob her public key</li>
                    <li>Eve intercepts, sends her own public key to Bob</li>
                    <li>Eve intercepts Bob's public key, sends her own to Alice</li>
                    <li>Eve can decrypt, read, modify, and re-encrypt everything!</li>
                  </ol>
                  <p><strong>Defense:</strong> Use certificates, PKI, out-of-band verification</p>
                </div>
                
                <div class="example-box">
                  <h4>4. Padding Oracle Attacks</h4>
                  <p>Exploits error messages about padding validity</p>
                  <p><strong>Famous: Bleichenbacher's attack on RSA</strong></p>
                  <p><strong>Defense:</strong> Use OAEP padding, don't leak padding errors</p>
                </div>
                
                <p><strong>Attacks Affecting BOTH Types:</strong></p>
                
                <div class="example-box">
                  <h4>Side-Channel Attacks</h4>
                  <p>Exploit physical implementation, not the math:</p>
                  <ul>
                    <li><strong> Timing:</strong> Measure how long operations take (reveals key bits)</li>
                    <li><strong> Power Analysis:</strong> Monitor power consumption patterns</li>
                    <li><strong> Acoustic:</strong> Listen to CPU sounds/fan noise</li>
                    <li><strong> EM:</strong> Measure electromagnetic emissions</li>
                  </ul>
                  <p><strong>Defense:</strong> Constant-time implementations, masking, shielding</p>
                </div>
                
                <div class="example-box">
                  <h4>Implementation Vulnerabilities</h4>
                  <p><strong>Famous Examples:</strong></p>
                  <ul>
                    <li><strong>Heartbleed (2014):</strong> OpenSSL bug leaked private keys</li>
                    <li><strong>POODLE (2014):</strong> SSL 3.0 vulnerability</li>
                    <li><strong>DROWN (2016):</strong> Cross-protocol attack</li>
                    <li><strong>KRACK (2017):</strong> WPA2 key reinstallation</li>
                  </ul>
                  <p><strong>Defense:</strong> Keep software updated, use vetted libraries</p>
                </div>
                
                <p><strong>Social Engineering (Affects All Crypto):</strong></p>
                <ul>
                  <li> Phishing for passwords/keys</li>
                  <li> "Rubber-hose cryptanalysis" (coercion)</li>
                  <li> Dumpster diving for printed keys</li>
                  <li> Shoulder surfing passwords</li>
                </ul>
                
                <div class="example-box">
                  <h4>Defense Strategies Summary</h4>
                  <table style="width:100%; border-collapse: collapse;">
                    <tr style="background: var(--dark-blue); color: white;">
                      <th style="padding:8px; border:1px solid #ddd;">Threat</th>
                      <th style="padding:8px; border:1px solid #ddd;">Defense</th>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Brute Force</td>
                      <td style="padding:8px; border:1px solid #ddd;">Long keys (AES-256, RSA-2048+)</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Key Distribution</td>
                      <td style="padding:8px; border:1px solid #ddd;">Use asymmetrical or DH key exchange</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">MITM</td>
                      <td style="padding:8px; border:1px solid #ddd;">Certificates, digital signatures, PKI</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Side-Channel</td>
                      <td style="padding:8px; border:1px solid #ddd;">Constant-time code, hardware protection</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Weak Keys</td>
                      <td style="padding:8px; border:1px solid #ddd;">Strong RNG, proper key generation</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Implementation</td>
                      <td style="padding:8px; border:1px solid #ddd;">Use vetted libraries, keep updated</td>
                    </tr>
                    <tr>
                      <td style="padding:8px; border:1px solid #ddd;">Social Engineering</td>
                      <td style="padding:8px; border:1px solid #ddd;">User education, multi-factor auth</td>
                    </tr>
                  </table>
                </div>
                
                <p><strong>The Golden Rules:</strong></p>
                <ul>
                  <li> Never roll your own crypto - use established libraries</li>
                  <li> Protect keys better than the data itself</li>
                  <li> Keep cryptographic software updated</li>
                  <li> Educate users - they're often the weakest link</li>
                  <li> Defense in depth - don't rely on crypto alone</li>
                </ul>`,
      quiz: [
        { q: 'What makes brute force attacks impractical on AES-256?', options: ['Illegal to attempt', 'Too many possible keys', 'Keys change daily'], a: 'Too many possible keys' },
        { q: 'Man-in-the-Middle attacks can be prevented by:', options: ['Using longer keys', 'Using certificates and PKI', 'Encrypting twice'], a: 'Using certificates and PKI' },
        { q: 'Side-channel attacks target:', options: ['The mathematical algorithm', 'Physical implementation leaks', 'Network protocols'], a: 'Physical implementation leaks' }
      ]
    },

    {
      id: 10,
      title: 'Real-World Applications & Future',
      content: `<p><strong>Symmetrical + Asymmetrical in Action:</strong> Every day, you rely on both types of encryption working together. Let's explore where and how they're used in the real world.</p>
                
                <div class="example-box">
                  <h4> HTTPS/TLS - The Foundation of Web Security</h4>
                  <p><strong>When you visit https://example.com:</strong></p>
                  
                  <p><strong>Phase 1: Asymmetrical (Handshake)</strong></p>
                  <ol>
                    <li>Server sends RSA/ECC certificate with public key</li>
                    <li>Browser verifies certificate (signed by trusted CA)</li>
                    <li>ECDHE key exchange derives shared secret</li>
                    <li>Both sides now have matching session key</li>
                  </ol>
                  
                  <p><strong>Phase 2: Symmetrical (Data Transfer)</strong></p>
                  <ul>
                    <li>All web traffic encrypted with AES-128-GCM or AES-256-GCM</li>
                    <li>Fast enough to stream 4K video!</li>
                    <li>New session key for each connection (Perfect Forward Secrecy)</li>
                  </ul>
                  
                  <p> The padlock icon means both are protecting you!</p>
                </div>
                
                <div class="example-box">
                  <h4> Messaging Apps - End-to-End Encryption</h4>
                  <p><strong>Signal, WhatsApp, iMessage:</strong></p>
                  
                  <p><strong>Asymmetrical Part:</strong></p>
                  <ul>
                    <li>Each user has long-term identity key pair (ECC)</li>
                    <li>X3DH protocol establishes initial shared secret</li>
                    <li>Digital signatures verify message authenticity</li>
                  </ul>
                  
                  <p><strong>Symmetrical Part:</strong></p>
                  <ul>
                    <li>Double Ratchet algorithm generates unique AES key for each message</li>
                    <li>Message content encrypted with AES-256</li>
                    <li>Even the service provider can't read messages!</li>
                  </ul>
                  
                  <p> Result: True end-to-end encryption</p>
                </div>
                
                <div class="example-box">
                  <h4> Full Disk Encryption</h4>
                  <p><strong>BitLocker (Windows), FileVault (macOS), LUKS (Linux):</strong></p>
                  
                  <p><strong>Primarily Symmetrical:</strong></p>
                  <ul>
                    <li>Entire disk encrypted with AES-256 (fast!)</li>
                    <li>Master key encrypted with key derived from password</li>
                    <li>TPM chip stores encryption keys securely</li>
                  </ul>
                  
                  <p><strong>Why Symmetrical?</strong> Need to encrypt/decrypt gigabytes quickly as you use your computer. Asymmetrical would be impossibly slow!</p>
                </div>
                
                <div class="example-box">
                  <h4> Email Encryption</h4>
                  <p><strong>PGP/GPG - Pretty Good Privacy:</strong></p>
                  
                  <p><strong>Sending Encrypted Email:</strong></p>
                  <ol>
                    <li>Generate random AES session key (symmetrical)</li>
                    <li>Encrypt email body with AES key</li>
                    <li>Encrypt AES key with recipient's RSA public key (asymmetrical)</li>
                    <li>Sign entire message with your RSA private key (authentication)</li>
                    <li>Send: encrypted body + encrypted key + signature</li>
                  </ol>
                  
                  <p><strong>Receiving:</strong></p>
                  <ol>
                    <li>Verify signature with sender's public key (authenticity)</li>
                    <li>Decrypt AES key with your private key</li>
                    <li>Decrypt email body with AES key</li>
                  </ol>
                  
                  <p> Hybrid encryption + authentication = secure email!</p>
                </div>
                
                <p><strong>More Real-World Uses:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                  <tr style="background: var(--light-teal);">
                    <th style="padding:8px; border:1px solid #ddd;">Application</th>
                    <th style="padding:8px; border:1px solid #ddd;">Symmetrical</th>
                    <th style="padding:8px; border:1px solid #ddd;">Asymmetrical</th>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>VPN</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">AES tunnel encryption</td>
                    <td style="padding:8px; border:1px solid #ddd;">RSA/ECDH key exchange</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>SSH</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">AES session encryption</td>
                    <td style="padding:8px; border:1px solid #ddd;">Ed25519 authentication</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>WiFi (WPA3)</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">AES-CCMP encryption</td>
                    <td style="padding:8px; border:1px solid #ddd;">SAE (DH-based) handshake</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Bitcoin</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">N/A</td>
                    <td style="padding:8px; border:1px solid #ddd;">ECDSA signatures</td>
                  </tr>
                  <tr>
                    <td style="padding:8px; border:1px solid #ddd;"><strong>Cloud Storage</strong></td>
                    <td style="padding:8px; border:1px solid #ddd;">AES-256 file encryption</td>
                    <td style="padding:8px; border:1px solid #ddd;">RSA for key management</td>
                  </tr>
                </table>
                
                <p><strong> The Future of Encryption:</strong></p>
                
                <div class="example-box">
                  <h4>Post-Quantum Cryptography</h4>
                  <p><strong>The Threat:</strong> Quantum computers will break RSA and ECC using Shor's algorithm!</p>
                  
                  <p><strong>Impact on Each Type:</strong></p>
                  <ul>
                    <li> <strong>Symmetrical (AES):</strong> Mostly safe! Just double key size (AES-256 → secure)</li>
                    <li> <strong>Asymmetrical (RSA/ECC):</strong> Completely broken by quantum computers!</li>
                  </ul>
                  
                  <p><strong>Solutions Being Developed:</strong></p>
                  <ul>
                    <li><strong>Lattice-based crypto:</strong> Based on hard math problems quantum can't solve</li>
                    <li><strong>Hash-based signatures:</strong> SPHINCS+, XMSS</li>
                    <li><strong>Code-based crypto:</strong> McEliece cryptosystem</li>
                    <li><strong>NIST Competition:</strong> Standardizing post-quantum algorithms (CRYSTALS-Kyber selected!)</li>
                  </ul>
                </div>
                
                <div class="example-box">
                  <h4>Emerging Technologies</h4>
                  <p><strong>Homomorphic Encryption:</strong> Compute on encrypted data without decrypting!</p>
                  <ul>
                    <li>Cloud can process your data without seeing it</li>
                    <li>Still slow, but improving</li>
                  </ul>
                  
                  <p><strong>Zero-Knowledge Proofs:</strong> Prove you know something without revealing it</p>
                  <ul>
                    <li>Used in cryptocurrencies (Zcash)</li>
                    <li>Privacy-preserving authentication</li>
                  </ul>
                  
                  <p><strong>Quantum Key Distribution (QKD):</strong> Use quantum physics for unbreakable key exchange</p>
                  <ul>
                    <li>Any eavesdropping disturbs quantum states (detectable!)</li>
                    <li>Expensive, limited range currently</li>
                  </ul>
                </div>
                
                <p><strong>Best Practices for Users:</strong></p>
                <ul>
                  <li> Always use HTTPS (check for padlock icon)</li>
                  <li> Enable full disk encryption (BitLocker, FileVault)</li>
                  <li> Use end-to-end encrypted messaging (Signal, WhatsApp)</li>
                  <li> Enable 2FA with authenticator apps</li>
                  <li> Use password manager with strong encryption</li>
                  <li> Keep all software updated (security patches)</li>
                  <li> Use VPN on public WiFi</li>
                  <li> Verify website certificates on sensitive sites</li>
                  <li> Understand what your apps encrypt (and what they don't!)</li>
                </ul>
                
                <div class="example-box">
                  <h4>The Big Picture</h4>
                  <p><strong>Why Both Types Matter:</strong></p>
                  <ul>
                    <li> <strong>Symmetrical:</strong> Fast, efficient, perfect for bulk data</li>
                    <li> <strong>Asymmetrical:</strong> Solves key distribution, enables authentication</li>
                    <li> <strong>Together:</strong> Secure, scalable, practical encryption for everyone</li>
                  </ul>
                  
                  <p><strong>Encryption protects:</strong></p>
                  <ul>
                    <li> Freedom of speech and privacy</li>
                    <li> Democratic processes</li>
                    <li> Global financial system</li>
                    <li> Medical privacy</li>
                    <li> Journalists and whistleblowers</li>
                    <li> Human rights worldwide</li>
                  </ul>
                  
                  <p><strong>Remember:</strong> Encryption is not about having something to hide - it's about protecting everything you value in the digital age. Understanding symmetrical and asymmetrical encryption empowers you to make informed security decisions! 🎓</p>
                </div>`,
      quiz: [
        { q: 'HTTPS uses which type(s) of encryption?', options: ['Only symmetrical', 'Only asymmetrical', 'Both types together'], a: 'Both types together' },
        { q: 'Quantum computers threaten which type more?', options: ['Symmetrical', 'Asymmetrical', 'Both equally'], a: 'Asymmetrical' },
        { q: 'Full disk encryption primarily uses:', options: ['Symmetrical encryption', 'Asymmetrical encryption', 'No encryption'], a: 'Symmetrical encryption' }
      ]
    }
  ];

  // --- Helpers & DOM references ---
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');
  const lessonsSection = document.getElementById('lessons');
  const progressCardsRoot = document.getElementById('progress-cards');
  const certificateNameEl = document.getElementById('user-name');
  const certificateDateEl = document.getElementById('certificate-date');

  // localStorage keys
  const LS_PROGRESS = 'encryption_progress_v1';
  const LS_CONTACTS = 'encryption_contacts_v1';

  // Load or initialize progress: object { lessonId: { completed: bool, score: number } }
  function loadProgress() {
    try {
      const raw = localStorage.getItem(LS_PROGRESS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(progress) {
    localStorage.setItem(LS_PROGRESS, JSON.stringify(progress));
  }

  let progress = loadProgress();

  // --- SPA navigation utilities ---
  function hideAllPages() {
    pages.forEach(p => p.classList.remove('active'));
  }
  function setActiveNav(pageId) {
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('data-page') === pageId));
  }
  function showPage(pageId) {
    hideAllPages();
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');
    setActiveNav(pageId);
    
    // Refresh content when navigating to specific pages
    if (pageId === 'progress') {
      renderProgressCards();
    } else if (pageId === 'lessons') {
      renderLessonsList();
    } else if (pageId === 'certificate') {
      fillCertificateFromProgress();
    }
  }

  // Mobile menu
  mobileMenuBtn.addEventListener('click', () => navMenu.classList.toggle('show'));

  // Global nav links
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      const page = el.getAttribute('data-page');
      if (!page) return;
      e.preventDefault();
      showPage(page);
      navMenu.classList.remove('show');
    });
  });

  // --- Rendering: Lessons list (cards) & lesson view ---
  function renderLessonsList() {
    const container = lessonsSection.querySelector('.lesson-content');
    container.innerHTML = ''; // Clear existing content
    
    // Create lesson grid
    const grid = document.createElement('div');
    grid.className = 'card-grid lesson-grid';
    
    LESSONS.forEach(lesson => {
      const completed = progress[lesson.id] && progress[lesson.id].completed;
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-header">
          <i class="fas fa-book"></i>
          <h3>${lesson.id}. ${lesson.title}</h3>
        </div>
        <div class="card-body">
          <p>${stripTags(lesson.content).slice(0, 120)}${lesson.content.length>120?'...':''}</p>
          <div style="display:flex; gap:8px; margin-top:1rem;">
            <button class="btn open-lesson-btn" data-lesson="${lesson.id}">Open Lesson</button>
            <button class="btn btn-outline open-quiz-btn" data-lesson="${lesson.id}">Take Quiz</button>
            <div style="flex:1"></div>
            <div style="align-self:center; font-weight:600; color:${completed?'var(--teal)':'#666'}">
              ${completed? 'Completed' : 'Not done'}
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    
    container.appendChild(grid);
    
    // Add event listeners to lesson buttons
    grid.querySelectorAll('.open-lesson-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lessonId = parseInt(btn.getAttribute('data-lesson'));
        renderLessonView(lessonId);
      });
    });
    
    grid.querySelectorAll('.open-quiz-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lessonId = parseInt(btn.getAttribute('data-lesson'));
        renderQuizView(lessonId);
      });
    });
  }

  function stripTags(html) {
    const tmp = document.createElement('div'); 
    tmp.innerHTML = html; 
    return tmp.textContent || tmp.innerText || '';
  }

  // Render a single lesson
  function renderLessonView(lessonId) {
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;

    const container = lessonsSection.querySelector('.lesson-content');
    container.innerHTML = `
      <div class="lesson-view">
        <h2>${lesson.id}. ${lesson.title}</h2>
        <div class="lesson-content-text">
          ${lesson.content}
        </div>
        <div style="text-align:center; margin-top:2rem;">
          <button class="btn take-quiz-btn" data-lesson="${lesson.id}">Take Quiz</button>
          <button class="btn btn-outline back-to-list-btn" style="margin-left:8px;">Back to Lessons</button>
        </div>
      </div>
    `;

    // Add event listeners
    container.querySelector('.take-quiz-btn').addEventListener('click', (e) => {
      e.preventDefault();
      renderQuizView(lesson.id);
    });

    container.querySelector('.back-to-list-btn').addEventListener('click', (e) => {
      e.preventDefault();
      renderLessonsList();
    });
  }

  // --- Quiz rendering & logic ---
  function renderQuizView(lessonId) {
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;

    const container = lessonsSection.querySelector('.lesson-content');
    container.innerHTML = `
      <div class="quiz-view">
        <h2 style="color: var(--dark-blue); margin-bottom: 1rem;">${lesson.id}. ${lesson.title} — Quiz</h2>
        <div class="quiz-container">
          ${lesson.quiz.map((q, qi) => `
            <div class="quiz-question" data-qindex="${qi}">
              <h3>${qi+1}. ${q.q}</h3>
              <div class="quiz-options">
                ${q.options.map(opt => `<div class="quiz-option" tabindex="0">${escapeHtml(opt)}</div>`).join('')}
              </div>
              <div class="quiz-feedback"></div>
            </div>
          `).join('')}
          <div class="quiz-actions" style="margin-top:1.5rem;">
            <button class="btn btn-outline" id="quiz-back-btn">Back to Lesson</button>
            <div style="flex:1"></div>
            <button class="btn" id="check-answers-btn">Check Answers</button>
            <button class="btn" id="next-lesson-btn" style="display:none;">Next Lesson</button>
          </div>
        </div>
      </div>
    `;

    // Wire option click behavior
    container.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const group = opt.closest('.quiz-options');
        group.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });

      // keyboard accessibility
      opt.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          opt.click();
        }
      });
    });

    // Back to lesson button
    container.querySelector('#quiz-back-btn').addEventListener('click', e => {
      e.preventDefault();
      renderLessonView(lesson.id);
    });

    // Check answers logic
    container.querySelector('#check-answers-btn').addEventListener('click', e => {
      e.preventDefault();
      const questions = Array.from(container.querySelectorAll('.quiz-question'));
      let allCorrect = true;
      let scoreCount = 0;

      questions.forEach((qEl, qi) => {
        const chosen = qEl.querySelector('.quiz-option.selected');
        const feedback = qEl.querySelector('.quiz-feedback');
        feedback.className = 'quiz-feedback'; // reset

        // clear states
        qEl.querySelectorAll('.quiz-option').forEach(o => {
          o.classList.remove('correct','incorrect');
        });

        const correctAnswer = lesson.quiz[qi].a;

        if (!chosen) {
          allCorrect = false;
          feedback.textContent = '❌ Please select an answer.';
          feedback.classList.add('incorrect');
          return;
        }

        if (chosen.textContent.trim() === correctAnswer) {
          chosen.classList.add('correct');
          feedback.textContent = '✅ Correct! Well done.';
          feedback.classList.add('correct');
          scoreCount++;
        } else {
          chosen.classList.add('incorrect');
          // highlight correct option
          qEl.querySelectorAll('.quiz-option').forEach(opt => {
            if (opt.textContent.trim() === correctAnswer) opt.classList.add('correct');
          });
          feedback.textContent = '❌ Try again. The correct answer is highlighted.';
          feedback.classList.add('incorrect');
          allCorrect = false;
        }
      });

      // Save score to progress
      const percent = Math.round((scoreCount / lesson.quiz.length) * 100);
      progress[lesson.id] = { completed: scoreCount === lesson.quiz.length, score: percent };
      saveProgress(progress);
      renderProgressCards(); // update progress UI

      // If all correct, show next lesson button (or certificate if final)
      const nextBtn = container.querySelector('#next-lesson-btn');
      if (allCorrect) {
        nextBtn.style.display = 'inline-block';
        container.querySelector('#check-answers-btn').style.display = 'none';
      }
    });

    // Next lesson behavior
    container.querySelector('#next-lesson-btn').addEventListener('click', e => {
      e.preventDefault();
      const nextId = lesson.id < LESSONS.length ? lesson.id + 1 : null;
      if (nextId) {
        renderLessonView(nextId);
      } else {
        // finished all lessons -> show certificate
        fillCertificateFromProgress();
        showPage('certificate');
      }
    });
  }

  function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // --- Progress tracker rendering ---
  function renderProgressCards() {
    if (!progressCardsRoot) return;
    progressCardsRoot.innerHTML = '';
    
    LESSONS.forEach(l => {
      const p = progress[l.id] || {};
      const card = document.createElement('div');
      card.className = 'progress-card' + (p.completed ? ' completed' : '');
      card.innerHTML = `
        <i class="${p.completed ? 'fas fa-check-circle' : 'fas fa-lock'}"></i>
        <h4>${l.title}</h4>
        <p>${p.completed ? 'Score: ' + (p.score ?? '—') + '%' : 'Not Started'}</p>
        <div style="margin-top:8px;">
          <button class="btn btn-outline goto-lesson-btn" data-lesson="${l.id}">Open</button>
        </div>
      `;
      progressCardsRoot.appendChild(card);
    });
    
    // wire open buttons
    progressCardsRoot.querySelectorAll('.goto-lesson-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const id = parseInt(btn.getAttribute('data-lesson'));
        renderLessonView(id);
        showPage('lessons');
      });
    });
  }

  // --- Certificate ---
  function fillCertificateFromProgress() {
    // choose a name stored in localStorage or default placeholder
    const name = localStorage.getItem('encryption_user_name') || '[Your Name]';
    certificateNameEl.textContent = name;
    certificateDateEl.textContent = new Date().toLocaleDateString();
    
    // If all lessons completed, show congrats
    const allComplete = LESSONS.every(l => progress[l.id] && progress[l.id].completed);
    const printBtn = document.getElementById('print-certificate');
    const saveBtn = document.getElementById('save-certificate');
    
    if (allComplete) {
      printBtn.onclick = () => window.print();
      saveBtn.onclick = () => {
        // demo save: store certificate info in localStorage
        const certs = JSON.parse(localStorage.getItem('encryption_certs') || '[]');
        certs.push({ name, date: new Date().toISOString() });
        localStorage.setItem('encryption_certs', JSON.stringify(certs));
        alert('Certificate saved locally (demo).');
      };
    } else {
      printBtn.onclick = () => window.print();
      saveBtn.onclick = () => alert('Finish all lessons to earn the certificate!');
    }
  }

  // --- Contact form handling (client-side demo) ---
  const contactForm = document.getElementById('contact-form');
  const contactResult = document.getElementById('contact-result');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      
      if (!name || !email || !message) {
        contactResult.textContent = 'Please complete all fields.';
        return;
      }
      
      // Save to localStorage as demo (serverless)
      const stored = JSON.parse(localStorage.getItem(LS_CONTACTS) || '[]');
      stored.push({ name, email, message, date: new Date().toISOString() });
      localStorage.setItem(LS_CONTACTS, JSON.stringify(stored));
      
      contactResult.textContent = 'Message sent (saved locally).';
      contactForm.reset();
      
      // optionally store user name for certificate personalization
      localStorage.setItem('encryption_user_name', name);
    });
  }

  // --- Global button handlers ---
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-action="open-lesson"]')) {
      e.preventDefault();
      const lessonId = parseInt(e.target.getAttribute('data-lesson'));
      renderLessonView(lessonId);
      showPage('lessons');
    }
    if (e.target.matches('[data-action="open-quiz"]')) {
      e.preventDefault();
      const lessonId = parseInt(e.target.getAttribute('data-lesson'));
      renderQuizView(lessonId);
      showPage('lessons');
    }
  });

  // --- Initial boot ---
  function boot() {
    renderLessonsList();
    renderProgressCards();
    fillCertificateFromProgress();
    showPage('home');
  }

  boot();

  // Expose for debugging
  window.EB = { 
    LESSONS, 
    progress, 
    renderLessonsList, 
    renderQuizView, 
    renderLessonView, 
    renderProgressCards 
  };
})();
"use client";

import { useEffect, useState } from "react";

/* ─── Config ─────────────────────────────────────────────── */
const API_KEY = "AIzaSyBMWHaZ036FcFLxOOmLDIkKF2p-2KUWT-4";
const CHANNEL_ID = "UCITORRpgYFysxixfAa623yQ";
const MAX_RESULTS = 9;

/* ─── Types ───────────────────────────────────────────────── */
interface Video {
  id: string;
  titulo: string;
  imagem: string;
  publicadoEm: string;
  descricao: string;
}

/* ─── Helpers ─────────────────────────────────────────────── */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/* ─── Modal ───────────────────────────────────────────────── */
function VideoModal({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10, 18, 14, 0.92)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          background: "#f5f0e8",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "860px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          animation: "modalPop 0.2s ease",
        }}
      >
        <div style={{ position: "relative", aspectRatio: "16/9", background: "#000" }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>

        <div
          style={{
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div>
            <p
              className="font-display"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#0B2239",
                margin: 0,
                lineHeight: 1.35,
              }}
            >
              {video.titulo}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: "4px 0 0" }}>
              {formatDate(video.publicadoEm)}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#0B2239",
                fontSize: "0.75rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
              </svg>
              Ver no YouTube
            </a>

            <button
              onClick={onClose}
              style={{
                background: "#e8e2d4",
                border: "none",
                color: "#0B2239",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Card ────────────────────────────────────────────────── */
function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid #e0d9cc",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(26, 46, 34, 0.15)"
          : "0 2px 12px rgba(26, 46, 34, 0.06)",
        borderColor: hovered ? "#0B2239" : "#e0d9cc",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "#0B2239" }}>
        <img
          src={video.imagem}
          alt={video.titulo}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.35s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10, 18, 14, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(245, 240, 232, 0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0B2239">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "14px 16px 18px" }}>
        <p
          className="font-display"
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#0B2239",
            lineHeight: 1.45,
            margin: "0 0 8px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {video.titulo}
        </p>
        <p style={{ fontSize: "0.72rem", color: "#6B6B6B", margin: 0, letterSpacing: "0.2px" }}>
          {formatDate(video.publicadoEm)}
        </p>
      </div>
    </article>
  );
}

/* ─── Featured ────────────────────────────────────────────── */
function FeaturedVideo({ video, onClick }: { video: Video; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  const descricaoTruncada = video.descricao.length > 280
    ? video.descricao.slice(0, 280).trimEnd() + "…"
    : video.descricao;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "center",
        background: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e0d9cc",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(26,46,34,0.08)",
        animation: "fadeUp 0.5s ease both",
      }}
    >
      {/* Thumbnail */}
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "#0B2239",
          cursor: "pointer",
        }}
      >
        <img
          src={video.imagem}
          alt={video.titulo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.35s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,18,14,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0.7,
            transition: "opacity 0.25s ease",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(245,240,232,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#0B2239">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "32px 40px 32px 0" }}>
        <p
          className="font-display"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#0B2239",
            marginBottom: "12px",
          }}
        >
          Mais recente
        </p>
        <p
          className="font-display"
          onClick={onClick}
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
            fontWeight: 700,
            color: "#0B2239",
            lineHeight: 1.3,
            margin: "0 0 12px",
            cursor: "pointer",
          }}
        >
          {video.titulo}
        </p>
        <p style={{ fontSize: "0.75rem", color: "#6B6B6B", marginBottom: "16px" }}>
          {formatDate(video.publicadoEm)}
        </p>
        {descricaoTruncada && (
          <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "24px" }}>
            {descricaoTruncada}
          </p>
        )}
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#0B2239",
            color: "#C9A961",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.3px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
          </svg>
          Assistir no YouTube
        </a>
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────── */
export default function VideoSection() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  async function fetchVideos() {
    setLoading(true);
    setError(null);

    try {
      // 1. Get uploads playlist ID
      const chRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
      );
      const chData = await chRes.json();

      if (chData.error) throw new Error(chData.error.message);
      if (!chData.items?.length) throw new Error("Canal não encontrado.");

      const uploadsId = chData.items[0].contentDetails.relatedPlaylists.uploads;

      // 2. Get videos from uploads playlist
      const vRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
      );
      const vData = await vRes.json();

      if (vData.error) throw new Error(vData.error.message);
      if (!vData.items?.length) throw new Error("Nenhum vídeo encontrado.");

      const parsed: Video[] = vData.items.map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        titulo: item.snippet.title,
        imagem:
          item.snippet.thumbnails.maxres?.url ||
          item.snippet.thumbnails.high?.url ||
          item.snippet.thumbnails.medium?.url ||
          `https://i.ytimg.com/vi/${item.snippet.resourceId.videoId}/mqdefault.jpg`,
        publicadoEm: item.snippet.publishedAt,
        descricao: item.snippet.description || "",
      }));

      setVideos(parsed);
    } catch (err: any) {
      setError(err.message || "Não foi possível carregar os vídeos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <style>{`
        @keyframes modalPop {
          from { transform: scale(0.95); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <section
        style={{
          background: "#f5f0e8",
          padding: "80px 0 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative background pattern */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(74, 124, 89, 0.04) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(26, 46, 34, 0.05) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              className="font-display"
              style={{
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#0B2239",
                marginBottom: "12px",
              }}
            >
              Conteúdo exclusivo
            </p>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#0B2239",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              <span style={{ color: "#0B2239" }}>Vídeos do{" "}</span>
              <em style={{ fontStyle: "italic", color: "#C9A961" }}>
                Dr. Érico Diógenes
              </em>
            </h2>

            <div
              style={{
                width: "48px",
                height: "2px",
                background: "#0B2239",
                margin: "0 auto 20px",
                borderRadius: "2px",
              }}
            />

            <p
              style={{
                fontFamily: "inherit",
                fontSize: "1rem",
                color: "#6B6B6B",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Informações sobre saúde masculina, cirurgia robótica e tratamentos avançados em urologia.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "4rem 0",
                color: "#6B6B6B",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  border: "3px solid #e0d9cc",
                  borderTopColor: "#0B2239",
                  borderRadius: "50%",
                  animation: "spin 0.75s linear infinite",
                }}
              />
              <p style={{ fontSize: "0.875rem" }}>Carregando vídeos...</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "#6B6B6B",
              }}
            >
              <p style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
                Não foi possível carregar os vídeos.
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#9B9B9B",
                  marginBottom: "1.5rem",
                  maxWidth: "360px",
                  margin: "0 auto 1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {error}
              </p>
              <button
                onClick={fetchVideos}
                style={{
                  background: "#0B2239",
                  color: "#f5f0e8",
                  border: "none",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Tentar novamente
              </button>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && videos.length > 0 && (
            <>
              {/* Destaque — último vídeo */}
              {videos[0] && (
                <FeaturedVideo
                  video={videos[0]}
                  onClick={() => setActiveVideo(videos[0])}
                />
              )}

              {/* Grid dos demais */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "24px",
                  marginTop: "48px",
                  animation: "fadeUp 0.5s ease both",
                }}
              >
                {videos.slice(1).map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onClick={() => setActiveVideo(video)}
                  />
                ))}
              </div>

              {/* CTA */}
              <div style={{ textAlign: "center", marginTop: "48px" }}>
                <a
                  href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "transparent",
                    color: "#0B2239",
                    border: "1.5px solid #0B2239",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "0.3px",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#0B2239";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0e8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#0B2239";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
                  </svg>
                  Ver todos os vídeos no YouTube
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
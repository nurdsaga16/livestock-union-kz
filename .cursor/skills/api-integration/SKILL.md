---
name: api-integration
description: External backend API documentation — endpoints, authentication, request/response formats for the livestock-union-kz project. Use when integrating with the backend API, fetching data, creating API services, or when the user mentions API, backend, news, or data fetching.
---

# API Integration

The backend is an external service (not in this repo). Full docs: `API_DOCUMENTATION.md`.

## Base Configuration

| Item | Value |
|------|-------|
| Base URL | `/api` |
| Swagger UI | `/api/swagger-ui.html` |
| OpenAPI spec | `/api/v3/api-docs` |
| Auth | Bearer token for write operations |

## Endpoints

### Files (Public)

```
GET /api/files/{filename}
```

Returns binary file with appropriate `Content-Type`. Used for news cover images.

### News

#### List (Public)

```
GET /api/news?query=&page=0&size=10&sort=createdAt,desc
```

Response (paginated):

```json
{
  "content": [
    {
      "id": 1,
      "title": "string",
      "description": "string",
      "imageUrl": "string",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "totalElements": 100,
  "totalPages": 10,
  "number": 0,
  "size": 10,
  "first": true,
  "last": false,
  "empty": false
}
```

#### Get by ID (Public)

```
GET /api/news/{id}
```

Returns single news object. `404` if not found.

#### Create (Auth Required)

```
POST /api/news
Content-Type: multipart/form-data
Authorization: Bearer <token>
```

Parts: `data` (JSON: `{title, description}`) + optional `image` (file, max 10MB).
Returns `201` with created news object.

#### Update (Auth Required)

```
PUT /api/news/{id}
Content-Type: multipart/form-data
Authorization: Bearer <token>
```

Same parts as Create. Omit `image` to keep existing. Returns `200`.

#### Delete — Soft Delete (Auth Required)

```
DELETE /api/news/{id}
Authorization: Bearer <token>
```

Returns `204 No Content`.

## Roles

| Role | Permissions |
|------|-------------|
| Public | Read news, get files |
| `ROLE_ADMIN` | Full CRUD |
| `ROLE_OPERATOR` | Full CRUD |

## Error Format

```json
{
  "type": "about:blank",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "News with id 999 not found",
  "errors": [],
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## Integration Guidelines

When creating API service layer:

1. Create `src/services/api.ts` with base fetch wrapper
2. Create `src/services/news.ts` for news-specific calls
3. Use environment variable for base URL: `import.meta.env.VITE_API_URL`
4. Add `.env.example` with `VITE_API_URL=/api`
5. Handle pagination with a reusable `PaginatedResponse<T>` type
6. Image URLs from API: prefix with base URL + `/files/`

For full endpoint details, see [API_DOCUMENTATION.md](../../../API_DOCUMENTATION.md).
